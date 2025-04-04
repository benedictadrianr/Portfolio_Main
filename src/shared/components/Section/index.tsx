import { FC, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

const Section: FC<SectionProps> = ({ children, id, className }) => {
  return (
    <section
      id={id}
      className={`${className} flex justify-center items-center section-wrapper min-w-screen min-h-screen animate-in py-28`}>
      {children}
    </section>
  );
};

export default Section;
