import { LuLoader, LuLoader2 } from "react-icons/lu";
import FadeIn from "../../../components/shared/FadeIn";
import ProjectCard from "../../../components/shared/ProjectCard";
import Section from "../../../components/shared/Section";
import Title from "../../../components/shared/Text/Title";
import { useData } from "../../../DataProvider";

const Project = () => {
  const { projects, compProjects } = useData();
  return (
    <Section id="project">
      <div className="w-[90%] md:w-3/4 flex flex-col gap-12">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl w-full">
            Company Projects.
          </h1>
        </FadeIn>
        <ul className="w-full mx-auto grid grid-cols-1 gap-8 xl:grid-cols-2 ">
          {compProjects.loading ? (
            <div className="animate-spin text-primary w-[50px]">
              <LuLoader2 />
            </div>
          ) : compProjects.data ? (
            compProjects.data.map((project) => {
              return (
                <li key={project.id}>
                  <ProjectCard project={project} />
                </li>
              );
            })
          ) : (
            <Title>{compProjects.error}</Title>
          )}
        </ul>
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl w-full">
            Personal Projects.
          </h1>
        </FadeIn>
        <ul className="w-full mx-auto grid grid-cols-1 gap-8 xl:grid-cols-2 ">
          {projects.loading ? (
            <div className="animate-spin text-primary w-[50px]">
              <LuLoader />
            </div>
          ) : projects.data ? (
            projects.data.map((project) => {
              return (
                <li key={project.id}>
                  <ProjectCard project={project} />
                </li>
              );
            })
          ) : (
            <Title>{projects.error}</Title>
          )}
        </ul>
      </div>
    </Section>
  );
};

export default Project;
