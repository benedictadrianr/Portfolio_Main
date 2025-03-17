import FadeIn from "../../../components/shared/FadeIn";
import ProjectCard from "../../../components/shared/ProjectCard";
import Section from "../../../components/shared/Section";
import { getCompProjects, getProjects } from "../../../utils/getProjects";

const Project = () => {
  const projects = getProjects();
  const compProjects = getCompProjects();
  return (
    <Section id="project">
      <div className="w-[90%] md:w-3/4 flex flex-col gap-12">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl w-full">
            Company Projects.
          </h1>
        </FadeIn>
        <ul className="w-full mx-auto grid grid-cols-1 gap-8 xl:grid-cols-2 ">
          {compProjects.map((project) => {
            return (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            );
          })}
        </ul>
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl w-full">
            Personal Projects.
          </h1>
        </FadeIn>
        <ul className="w-full mx-auto grid grid-cols-1 gap-8 xl:grid-cols-2 ">
          {projects.map((project) => {
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
