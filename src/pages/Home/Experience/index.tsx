import { LuLoader2 } from "react-icons/lu";
import ExperienceCard from "../../../components/Experience/ExperienceCard";
import FadeIn from "../../../components/shared/FadeIn";
import Section from "../../../components/shared/Section";
import { useData } from "../../../DataProvider";
import Title from "../../../components/shared/Text/Title";

const Experience = () => {
  const { experiences } = useData();

  return (
    <Section id="experience">
      <div className="w-[90%] md:w-3/4 flex flex-col gap-12">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl w-full">
            Experiences.
          </h1>
        </FadeIn>
        <ul className="flex flex-col gap-7">
          {experiences.loading ? (
            <div className="animate-spin text-primary w-[50px]">
              <LuLoader2 />
            </div>
          ) : experiences.data ? (
            experiences.data.map((exp) => (
              <li key={exp.id}>
                <ExperienceCard data={exp} />
              </li>
            ))
          ) : (
            <Title>{experiences.error}</Title>
          )}
        </ul>
      </div>
    </Section>
  );
};

export default Experience;
