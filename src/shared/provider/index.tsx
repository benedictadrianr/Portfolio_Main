import React, { createContext, ReactNode, useContext, useState } from "react";
import { ExperienceData } from "../../features/experience/data";
import { ExperienceType } from "../../features/experience/type";
import { companyProjects } from "../../features/project/company/data";
import { projectType } from "../../features/project/type";
import { personalProjectData } from "../../features/project/personal/data";

interface DataContextProps {
  experiences: ExperienceType[];
  personalProjects: projectType[];
  compProjects: projectType[];
  singleExp: ExperienceType | undefined;
  fetchSingleExp: (id: string | undefined) => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const experiences = ExperienceData;
  const compProjects = companyProjects;
  const personalProjects = personalProjectData;
  const [singleExp, setSingleExp] = useState<ExperienceType | undefined>(
    undefined
  );
  const fetchSingleExp = async (id: string | undefined) => {
    if (!id) return;
    const foundExp = experiences.find((exp) => String(exp.id) === id);
    setSingleExp(foundExp);
  };

  const value = {
    experiences,
    personalProjects,
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
