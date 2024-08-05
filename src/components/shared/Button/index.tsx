import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: string;
};

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`py-1 px-2 border-white border-2 rounded-md transition-all ease-in-out duration-300 hover:text-[#00F7FF] hover:border-[#00F7FF] flex items-center justify-center ${className}`}
      {...rest}>
      {children ?? "Click Me"}
    </button>
  );
};

export default Button;
