import {
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
  HTMLAttributes,
} from "react";

type FadeInProps = {
  children: ReactNode;
  duration?: number;
  className?: string;
} & HTMLAttributes<HTMLDivElement>; // Allow all other props of Div element

const FadeIn: FC<FadeInProps> = ({
  children,
  duration = 0,
  className,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, duration);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [duration]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      {...rest}>
      {children}
    </div>
  );
};

export default FadeIn;
