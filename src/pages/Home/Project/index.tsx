import FadeIn from "../../../shared/components/FadeIn";
import Section from "../../../shared/components/Section";
import ProjectCard from "../../../features/project/component/ProjectCard";
import { useData } from "../../../shared/provider";

const Project = () => {
  const { personalProjects, compProjects } = useData();
  return (
    <Section id="project">
      <div className="max-w-[900px] w-[90%] md:w-3/4 flex flex-col gap-12">
        <FadeIn>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl w-full">
            Company Projects
          </h1>
        </FadeIn>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {compProjects.map((project) => {
            return (
              <li key={project.id}>
                <ProjectCard size="m" project={project} />
              </li>
            );
          })}
        </ul>
        <FadeIn>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl w-full">
            Personal Projects
          </h1>
        </FadeIn>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:grid-cols-3 ">
          {personalProjects.map((project) => {
            return (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Project;
