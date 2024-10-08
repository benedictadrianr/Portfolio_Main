import { useEffect, useState } from "react";
import { Tables } from "../types/supabase";
import { supabase } from "../supabaseClient";

export const getProjects = () => {
  const [projects, setProjects] = useState<Tables<"Project">[]>([]);

  const fetchProjects = async () => {
    const { error, data } = await supabase.from("Project").select();
    if (error) {
      console.error(error.message);
      return;
    } else if (data) {
      setProjects(data);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return projects;
};
