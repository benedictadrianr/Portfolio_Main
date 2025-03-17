import { IoCodeSlashOutline as CodeIcon } from "react-icons/io5";
import { FC, useEffect, useState } from "react";
import { navbarData } from "../utils/data/navbarData";
import RouteItem from "./Navigation/RouteItem";

type NavbarProps = {
  className?: string;
};

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <nav
      className={`${className} bg-black/50 backdrop-blur w-8 lg:w-14 h-screen flex flex-col justify-between items-center py-8 z-50`}>
      <CodeIcon className="w-[25px] h-[25px]" />
      <div className="h-full w-full flex flex-col mt-8 justify-start items-center">
        <ul className="flex flex-col w-full text-white font-mono">
          {navbarData.map((data) => (
            <li>
              <RouteItem data={data} selected={selected} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
