import { useState } from "react";
import SkillCard from "../shared/SkillCard";
import { Tables } from "../../types/supabase";
import { useNavigate } from "react-router";

type DateTimeFormatOptions = {
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
};

const ExperienceCard = ({
  data,
  containerClassName,
}: {
  data: Tables<"Experience">;
  containerClassName?: string;
}) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const convertUnixToMonthYear = (unix: number) => {
    const date = new Date(unix * 1000);
    const options = { year: "numeric", month: "long" } as DateTimeFormatOptions;
    return date.toLocaleDateString("en-US", options);
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleOnClick = () => {
    navigate(`/Portfolio_Main/experience/${data.id}`);
  };

  return (
    <div
      key={data.id}
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${containerClassName} cursor-pointer relative w-full py-4 flex flex-col gap-2`}>
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
      <div className="w-3/4">
        <p className="whitespace-pre-wrap">{data.description}</p>
      </div>
      <div className="flex gap-2">
        {data.skills.map((skill) => (
          <SkillCard name={skill} />
        ))}
      </div>

      <div
        className={`absolute right-16 top-1/2 overflow-hidden rounded-md w-[200px] transition-all duration-300 ${
          hover ? "opacity-100 arrow-enter" : "opacity-0 arrow-exit"
        }`}>
        <img src={data.previewImg} />
      </div>
    </div>
  );
};

export default ExperienceCard;
