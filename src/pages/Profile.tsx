import {
  TbBrandReactNative as ReactIcon,
  TbBrandTailwind as TailwindIcon,
  TbBrandHtml5 as HTMLIcon,
  TbBrandCss3 as CSSIcon,
  TbBrandJavascript as JavascriptIcon,
  TbBrandTypescript as TypescriptIcon,
  TbBrandSupabase as SupabaseIcon,
  TbBrandNextjs as NextIcon,
} from "react-icons/tb";
import { FlipWords } from "../components/shared/FlipWords";

const list = [
  {
    id: 1,
    name: "React",
    icon: <ReactIcon size={"max"} />,
    alt: "react",
  },
  {
    id: 2,
    name: "NextJS",
    icon: <NextIcon size={"max"} />,
    alt: "nextjs",
  },
  {
    id: 2,
    name: "Tailwind",
    icon: <TailwindIcon size={"max"} />,
    alt: "tailwind",
  },
  {
    id: 3,
    name: "HTML",
    icon: <HTMLIcon size={"max"} />,
    alt: "html",
  },
  {
    id: 4,
    name: "CSS",
    icon: <CSSIcon size={"max"} />,
    alt: "css",
  },
  {
    id: 5,
    name: "Javascript",
    icon: <JavascriptIcon size={"max"} />,
    alt: "javascript",
  },
  {
    id: 6,
    name: "Typescript",
    icon: <TypescriptIcon size={"max"} />,
    alt: "typescript",
  },
  {
    id: 7,
    name: "Supabase",
    icon: <SupabaseIcon size={"max"} />,
    alt: "supabase",
  },
];

const words = ["Ben", "Rian", "Adrian"];

export default function Hero() {
  return (
    <section id="profile" className="section-wrapper">
      <div className="w-screen h-screen flex flex-col justify-center items-center relative gap-4 animate-in">
        <div className="w-[480px] flex justify-start items-center text-white gap-2 font-mono relative text-[48px]">
          <h1 className="">Hi 👋, I&apos;m </h1>
          <div>
            <FlipWords words={words} />
          </div>
        </div>
        <div className="max-w-[700px] text-xl text-white font-mono text-center flex flex-col gap-2">
          <p className="text-[32px]">
            I&apos;m a <span className="text-primary">Frontend Developer</span>
          </p>
          <p>
            I have spent 1 year studying and improving my skill in web
            development and I&apos;m eager to cooperate and learn more about
            frontend technology. <br /> I&apos;m especially proficient in:
          </p>
        </div>
        <div className="flex justify-centern items-center">
          <ul className="flex gap-2 flex-wrap justify-center">
            {list.map((skill) => {
              return (
                <li
                  className="w-[68px] h-[68px] text-white text-[10px] rounded-[16px] bg-[#171D25] p-2 flex items-center justify-center font-mono flex-col gap-1"
                  style={{ boxShadow: "inset 0 -2px 3px 0 #178F98" }}
                  key={skill.id}>
                  {skill.icon}
                  <p>{skill.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
