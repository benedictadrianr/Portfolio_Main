import Section from "../../components/shared/Section";
import { getProjects } from "../../utils/getProjects";

const Project = () => {
  const projects = getProjects();
  return (
    <Section id="project">
      <ul className="animate-in w-3/4 min-h-screen mx-auto grid grid-cols-1 gap-8 -z-50 xl:grid-cols-2 ">
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              style={{ backgroundImage: `url(${project.img})` }}
              className="card bg-center bg-cover rounded-xl transition-all min-h-[200px] overflow-hidden">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{ boxShadow: "inset 0 -70px 12px 0 #00000080" }}
                className="background bg-[#171D25]/65 w-full h-full transition flex justify-center items-center text-xl cursor-pointer relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 logo transition-all">
                  <img
                    src={project.logo}
                    className="h-[80px]"
                    alt="project logo"
                  />
                </div>
                <div className="title absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 font-mono transition-all w-full text-center">
                  {project.name}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Project;
