import Profile from "./Profile";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import { FC } from "react";

type ContentProps = {
  className?: string;
};

const Content: FC<ContentProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <Profile />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};

export default Content;
