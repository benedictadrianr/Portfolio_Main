import { HoverCardPortal } from "@radix-ui/react-hover-card";
import FadeIn from "../../../shared/components/FadeIn";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../shared/components/HoverCard";
import { projectType } from "../type";
import Text from "../../../shared/components/Text";
import SkillCard from "../../../shared/components/SkillCard";
import { dateTimeFormat } from "../../../shared/data/dateTimeFormat";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../shared/components/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

type Props = {
  project: projectType;
  size?: "m" | "s";
};

const ProjectCard = ({ project, size = "s" }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FadeIn>
      <HoverCard
        onOpenChange={setIsOpen}
        open={isOpen}
        openDelay={300}
        closeDelay={0}>
        <HoverCardTrigger asChild>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundImage: `url(${project.img})`,
              height: size === "m" ? "300px" : "200px",
            }}
            className={`bg-center bg-cover rounded-xl min-h-[200px] overflow-hidden flex justify-center items-center relative after:absolute after:inset-0 after:bg-primary-700 after:bg-opacity-70 ${
              size === "s"
                ? "hover:after:bg-opacity-30"
                : "hover:after:bg-opacity-10"
            } after:transition-all after:ease-in-out after:duration-300 group`}>
            <div className="w-full h-full z-10 transition-all duration-300 ease-in-out bg-gradient-to-tl group-hover:bg-none from-primary-500/50" />
            <h1
              style={{ boxShadow: "0 0 10px 0 #0CB0BC" }}
              className={`${
                size === "s" ? "text-lg" : "text-2xl"
              } absolute bottom-1/4 group-hover:bottom-5 text-center text-white font-bold bg-primary-600 shadow-xl px-4 rounded-md transition-all z-20`}>
              {project.name}
            </h1>
          </a>
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent
            onMouseEnter={() => setIsOpen(false)}
            arrowPadding={10}
            side="right"
            sideOffset={0}
            className="bg-secondary text-white HoverCardContent flex flex-col gap-2 w-[350px]">
            <Text className="text-lg">{project.name}</Text>
            <div className="aspect-video w-full flex items-center overflow-hidden">
              {project.imgCarousel ? (
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 1500,
                    }),
                  ]}>
                  <CarouselContent>
                    {project.imgCarousel.map((item, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={item}
                          alt={`${project.name}_image-${index}`}
                          className="object-cover object-center h-full"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              ) : (
                <img
                  src={project.img}
                  alt={project.name}
                  className="object-cover object-center w-full"
                />
              )}
            </div>
            {project.duration && (
              <>
                {project.duration[0].toLocaleDateString(
                  "en-GB",
                  dateTimeFormat
                )}{" "}
                -{" "}
                {project.duration[1].toLocaleDateString(
                  "en-GB",
                  dateTimeFormat
                )}
              </>
            )}
            {project.skillSet && (
              <ul className="flex gap-2">
                {project.skillSet.map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </ul>
            )}
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCard>
    </FadeIn>
  );
};

export default ProjectCard;
