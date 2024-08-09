import { FC, ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

const Text: FC<TextProps> = ({ children, className }) => {
  return <div className={`${className} `}>{children}</div>;
};

export default Text;
