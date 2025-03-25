import Profile from "./Profile";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import { FC } from "react";
import ParallaxScrolling from "../../components/shared/ParallaxScrolling";

type ContentProps = {
  className?: string;
};

const Content: FC<ContentProps> = ({ className }) => {
  return (
    <div
      style={{
        perspective: "10px",
      }}
      className={`${className} h-screen overflow-y-auto overflow-x-hidden`}>
      <ParallaxScrolling>
        <Profile />
      </ParallaxScrolling>
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};

export default Content;
