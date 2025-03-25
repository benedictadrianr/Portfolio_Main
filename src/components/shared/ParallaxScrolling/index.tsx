import { ReactNode } from "react";
import Ellipse5 from "/Ellipse 5.png";
import Ellipse4 from "/Ellipse 4.png";

type Props = {
  children?: ReactNode;
};

const ParallaxScrolling = (props: Props) => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
      }}
      className="relative flex justify-center items-center h-full -z-[1]">
      <img
        src={Ellipse4}
        alt="ellipse4"
        style={{
          transform: "translateZ(-30px) scale(4)",
        }}
        className="absolute pointer-events-none -z-[1] -bottom-full -left-full w-full lg:w-[70%]"
      />
      <img
        src={Ellipse5}
        alt="ellipse5"
        style={{
          transform: "translateZ(-30px) scale(4)",
        }}
        className="absolute pointer-events-none object-cover object-center -z-[1] -top-full -right-full w-full lg:w-[70%]"
      />
      {props.children}
    </div>
  );
};

export default ParallaxScrolling;
