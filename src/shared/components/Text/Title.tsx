import { FC, ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  className?: string;
};

const Title: FC<TitleProps> = ({ children, className }) => {
  return <div className={`${className} text-2xl lg:text-3xl`}>{children}</div>;
};

export default Title;
