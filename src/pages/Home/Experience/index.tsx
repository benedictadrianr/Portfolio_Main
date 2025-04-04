import FadeIn from "../../../shared/components/FadeIn";
import Section from "../../../shared/components/Section";
import ExperienceCard from "../../../features/experience/component/ExperienceCard";
import { useData } from "../../../shared/provider";

const Experience = () => {
  const { experiences } = useData();

  return (
    <Section id="experience">
      <div className="max-w-[900px] w-[90%] md:w-3/4 flex flex-col gap-12">
        <FadeIn>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl w-full">
            Experiences
          </h1>
        </FadeIn>
        <ul className="flex flex-col gap-7">
          {experiences
            .sort((a, b) => b.timeStart.getTime() - a.timeStart.getTime())
            .map((exp) => (
              <li key={exp.id}>
                <ExperienceCard data={exp} />
              </li>
            ))}
        </ul>
      </div>
    </Section>
  );
};

export default Experience;
