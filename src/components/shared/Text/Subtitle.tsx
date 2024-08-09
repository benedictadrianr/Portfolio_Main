import { FC, ReactNode } from "react";

type SubtitleProps = {
  children: ReactNode;
  className?: string;
};

const Subtitle: FC<SubtitleProps> = ({ children, className }) => {
  return <div className={`${className} text-2xl`}>{children}</div>;
};

export default Subtitle;
