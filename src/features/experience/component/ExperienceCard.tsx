import { useState } from "react";
import { useNavigate } from "react-router";
import FadeIn from "../../../shared/components/FadeIn";
import SkillCard from "../../../shared/components/SkillCard";
import { ExperienceType } from "../type";
import { dateTimeFormat } from "../../../shared/data/dateTimeFormat";

const ExperienceCard = ({
  data,
  containerClassName,
}: {
  data: ExperienceType;
  containerClassName?: string;
}) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleMouseEnter = () => {
    setHover(true);
  };

  return (
    <FadeIn>
      <a
        key={data.id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate(`experience/${data.id}`)}
        rel="noreferrer"
        className={`${containerClassName} cursor-pointer overflow-hidden relative w-full flex flex-col border border-primary-700 hover:border-primary-500 transition-colors ease-in-out duration-300 rounded-2xl bg-black bg-opacity-20`}>
        <div className="flex flex-col md:flex-row gap-2 items-start md:items-center w-full lg:w-fit bg-primary-700 py-[10px] px-[20px] rounded-tl-2xl lg:rounded-tr-none lg:rounded-br-2xl rounded-tr-2xl rounded-br-none">
          <h2 className="text-xl font-semibold">
            {data.companyName} | {data.jobType}
          </h2>
          <div className="mx-2 text-primary hidden md:block">—</div>
          <h3 className="text-primary">
            {data.timeStart.toLocaleDateString("en-GB", dateTimeFormat)} -{" "}
            {data.timeFinish.toLocaleDateString("en-GB", dateTimeFormat) ??
              "Present"}
          </h3>
        </div>

        <div className="flex flex-col px-6 pt-4 pb-7 gap-3 w-full xl:w-[60%]">
          <h3 className="text-3xl font-bold tracking-wide">{data.jobDesc}</h3>
          <ul className="ml-6 mb-2 space-y-1">
            {data.previewBullet.map((bullet, index) => (
              <li key={index} className="list-disc">
                {bullet}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <SkillCard name={skill} />
            ))}
          </div>
        </div>

        <div
          className={`hidden xl:block absolute right-10 lg:translate-x-0 top-1/2 -translate-y-1/2 rounded-xl w-[30%] h-[60%] aspect-video bg-cover bg-center bg-no-repeat -z-10 transition-all ease-in-out duration-300 ${
            hover ? "opacity-100" : "opacity-15"
          }`}
          style={{
            backgroundImage: `url(${data.previewImg})`,
          }}
        />
      </a>
    </FadeIn>
  );
};

export default ExperienceCard;
