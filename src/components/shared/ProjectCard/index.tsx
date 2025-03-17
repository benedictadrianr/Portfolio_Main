import FadeIn from "../FadeIn";

type Props = {
  project: {
    alt: string;
    id: number;
    name: string;
    link: string;
    img: string;
    logo: string;
  };
};

const ProjectCard = (props: Props) => {
  return (
    <FadeIn>
      <a
        key={props.project.id}
        href={props.project.link}
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundImage: `url(${props.project.img})`,
          boxShadow: `inset 0px -70px 30px 0px rgba(0, 0, 0, 0.8)`,
        }}
        className="bg-center bg-cover rounded-xl min-h-[200px] overflow-hidden w-full h-full flex justify-center items-center relative after:absolute after:inset-0 after:bg-black after:bg-opacity-70 hover:after:bg-opacity-50 after:transition-all after:ease-in-out after:duration-300 group">
        <div className="my-auto flex flex-col items-center gap-4">
          <img
            src={props.project.logo}
            className="h-[80px] transition-all relative z-10 opacity-25 group-hover:opacity-100"
            alt={props.project.alt}
          />
          <h1 className="absolute bottom-5 text-2xl text-white/25 group-hover:text-white font-mono transition-all z-10">
            {props.project.name}
          </h1>
        </div>
      </a>
    </FadeIn>
  );
};

export default ProjectCard;
