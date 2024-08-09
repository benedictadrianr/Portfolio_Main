import ExperienceCard from "../../../components/Experience/ExperienceCard";
import Section from "../../../components/shared/Section";
import { getExperience } from "../../../utils/getExperience";

const Experience = () => {
  const experiences = getExperience();

  return (
    <Section id="experience">
      <div className="w-3/4 flex flex-col gap-12">
        <h1 className="text-6xl w-full">Experiences.</h1>
        <div className="flex flex-col">
          {experiences.map((exp) => (
            <ExperienceCard
              data={exp}
              containerClassName="border-white border-b last:border-b-0"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
