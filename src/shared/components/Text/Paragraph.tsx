import { FC, ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

const Paragraph: FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p
      className={`${className} whitespace-pre-wrap text-justify text-sm lg:text-lg`}>
      {children}
    </p>
  );
};

export default Paragraph;
