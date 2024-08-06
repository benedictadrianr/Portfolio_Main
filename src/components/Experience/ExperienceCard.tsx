import SkillCard from "../shared/SkillCard";

export type ExperienceProps = {
  id: number;
  companyName: string;
  jobDesc: string;
  timeStart: number;
  timeFinish?: number | null;
  description: string;
  skills: string[];
};

type DateTimeFormatOptions = {
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
};

const ExperienceCard = ({
  data,
  containerClassName,
}: {
  data: ExperienceProps;
  containerClassName?: string;
}) => {
  const convertUnixToMonthYear = (unix: number) => {
    const date = new Date(unix * 1000);
    const options = { year: "numeric", month: "long" } as DateTimeFormatOptions;
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div
      key={data.id}
      className={`${containerClassName} w-full py-4 flex flex-col gap-2`}>
      <div className="flex justify-between items-end">
        <h2 className="text-2xl font-semibold">{data.companyName}</h2>
        <h3 className="text-primary">
          {convertUnixToMonthYear(data.timeStart)} -{" "}
          {data.timeFinish
            ? convertUnixToMonthYear(data.timeFinish)
            : "Present"}
        </h3>
      </div>
      <div>
        <h3 className="text-3xl">{data.jobDesc}</h3>
      </div>
      <div>
        <p>{data.description}</p>
      </div>
      <div className="flex gap-2">
        {data.skills.map((skill) => (
          <SkillCard name={skill} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
