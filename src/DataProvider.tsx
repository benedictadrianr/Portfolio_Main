import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Tables } from "./types/supabase";
import { supabase } from "./supabaseClient";

type ExperienceProps = {
  data: Tables<"Experience">[] | null;
  loading: boolean;
  error: string | null;
};

type SingleExpProps = {
  data: Tables<"Experience"> | null;
  loading: boolean;
  error: string | null;
};

type ProjectProps = {
  data: Tables<"Project">[] | null;
  loading: boolean;
  error: string | null;
};

type CompProjectProps = {
  data: Tables<"company_project">[] | null;
  loading: boolean;
  error: string | null;
};

interface DataContextProps {
  experiences: ExperienceProps;
  projects: ProjectProps;
  singleExp: SingleExpProps;
  compProjects: CompProjectProps;
  fetchSingleExp: (id: string | undefined) => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [experiences, setExperiences] = useState<ExperienceProps>({
    data: [],
    loading: true,
    error: null,
  });
  const [projects, setProjects] = useState<ProjectProps>({
    data: [],
    loading: true,
    error: null,
  });
  const [singleExp, setSingleExp] = useState<SingleExpProps>({
    data: null,
    loading: true,
    error: null,
  });
  const [compProjects, setCompProjects] = useState<CompProjectProps>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchExperience();
    fetchProjects();
    fetchCompProjects();
  }, []);

  const fetchExperience = async () => {
    const { error, data } = await supabase
      .from("Experience")
      .select()
      .order("created_at", { ascending: false });
    if (error) {
      setExperiences((prev) => ({
        ...prev,
        loading: false,
        error: error.message,
      }));
      return;
    } else if (data) {
      setExperiences((prev) => ({
        ...prev,
        data: data,
        loading: false,
      }));
    }
  };

  const fetchProjects = async () => {
    const { error, data } = await supabase.from("Project").select();
    if (error) {
      setProjects((prev) => ({
        ...prev,
        error: error.message,
        loading: false,
      }));
      return;
    } else if (data) {
      setProjects((prev) => ({
        ...prev,
        data: data,
        loading: false,
      }));
    }
  };

  const fetchSingleExp = async (id: string | undefined) => {
    if (!id) return;
    setSingleExp((prev) => ({
      ...prev,
      loading: true,
      error: null,
      data: null,
    }));
    const { error, data } = await supabase
      .from("Experience")
      .select()
      .eq("id", Number(id))
      .single();

    if (error) {
      setSingleExp((prev) => ({
        ...prev,
        error: error.message,
        loading: false,
      }));
      return;
    } else if (data) {
      setSingleExp((prev) => ({
        ...prev,
        data: data,
        loading: false,
      }));
    }
  };

  const fetchCompProjects = async () => {
    const { error, data } = await supabase.from("company_project").select();

    if (error) {
      setCompProjects((prev) => ({
        ...prev,
        error: error.message,
        loading: false,
      }));
      return;
    } else if (data) {
      setCompProjects((prev) => ({
        ...prev,
        data: data,
        loading: false,
      }));
    }
  };

  const value = {
    experiences,
    projects,
    singleExp,
    compProjects,
    fetchSingleExp,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextProps => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
