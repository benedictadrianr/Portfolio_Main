import ExperienceCard from "../../../components/Experience/ExperienceCard";
import FadeIn from "../../../components/shared/FadeIn";
import Section from "../../../components/shared/Section";
import { getExperience } from "../../../utils/getExperience";

const Experience = () => {
  const experiences = getExperience();

  return (
    <Section id="experience">
      <div className="w-[90%] md:w-3/4 flex flex-col gap-12">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl w-full">
            Experiences.
          </h1>
        </FadeIn>
        <ul className="flex flex-col gap-7">
          {experiences.map((exp) => (
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
