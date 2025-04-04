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
import { FlipWords } from "../../../shared/components/FlipWords";
import React from "react";
import Section from "../../../shared/components/Section";
import FadeIn from "../../../shared/components/FadeIn";

const list = [
  {
    id: 1,
    name: "React",
    icon: ReactIcon,
    alt: "react",
  },
  {
    id: 2,
    name: "NextJS",
    icon: NextIcon,
    alt: "nextjs",
  },
  {
    id: 2,
    name: "Tailwind",
    icon: TailwindIcon,
    alt: "tailwind",
  },
  {
    id: 3,
    name: "HTML",
    icon: HTMLIcon,
    alt: "html",
  },
  {
    id: 4,
    name: "CSS",
    icon: CSSIcon,
    alt: "css",
  },
  {
    id: 5,
    name: "Javascript",
    icon: JavascriptIcon,
    alt: "javascript",
  },
  {
    id: 6,
    name: "Typescript",
    icon: TypescriptIcon,
    alt: "typescript",
  },
  {
    id: 7,
    name: "Supabase",
    icon: SupabaseIcon,
    alt: "supabase",
  },
];

const words = ["Ben", "Rian", "Adrian"];

const Profile = () => {
  return (
    <Section id="profile">
      <div className="flex flex-col justify-center items-center relative gap-4">
        <FadeIn>
          <div className=" w-[280px] lg:w-[470px] flex justify-start items-center text-white gap-2 font-mono relative text-[28px] lg:text-[48px]">
            <h1 className="">Hi 👋, I&apos;m </h1>
            <div>
              <FlipWords words={words} />
            </div>
          </div>
        </FadeIn>
        <div className="max-w-[350px] sm:max-w-[500px] lg:max-w-[700px] text-white font-mono text-center flex flex-col gap-2">
          <FadeIn>
            <p className="text-[26px] lg:text-[32px]">
              I&apos;m a{" "}
              <span className="text-primary">Frontend Developer</span>
            </p>
          </FadeIn>
          <FadeIn>
            <p className="text-[16px] lg:text-[20px]">
              I have spent 1 year studying and improving my skill in web
              development and I&apos;m eager to cooperate and learn more about
              frontend technology. <br /> I&apos;m especially proficient in:
            </p>
          </FadeIn>
        </div>
        <div className="flex justify-centern items-center max-w-[330px] sm:max-w-fit">
          <FadeIn>
            <ul className="flex gap-2 flex-wrap justify-center">
              {list.map((skill) => {
                return (
                  <li
                    className="size-[60px] lg:size-[68px] text-white text-[10px] rounded-[16px] bg-secondary p-2 flex items-center justify-center font-mono flex-col gap-1"
                    style={{ boxShadow: "inset 0 -2px 3px 0 #178F98" }}
                    key={skill.id}>
                    {React.createElement(skill.icon, { size: "max" })}
                    <p>{skill.name}</p>
                  </li>
                );
              })}
            </ul>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};

export default Profile;
