import { IoCodeSlashOutline as CodeIcon } from "react-icons/io5";
import { FaRegUser as ProfileIcon } from "react-icons/fa";
import { IoGridOutline as ProjectIcon } from "react-icons/io5";
import { MdOutlinePhone as ContactIcon } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Navbar() {
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
    <nav className="bg-black/50 w-20 h-screen flex flex-col justify-between items-center py-8 fixed left-0 backdrop-blur z-50">
      <CodeIcon className="w-[25px] h-[25px]" />
      <div className="h-full w-full flex flex-col justify-center items-center">
        <ul className="flex flex-col w-full text-white font-mono">
          <li>
            <a
              href="#profile"
              className={`transition-all ease-in-out duration-300 hover:text-primary w-full flex justify-center border-r-primary py-6 ${
                selected === "profile" ? "bg-white/10 border-r-4" : ""
              }`}>
              <ProfileIcon className="w-[30px] h-[30px]" />
            </a>
          </li>
          <li>
            <a
              href="#project"
              className={`transition-all ease-in-out duration-300 hover:text-primary w-full flex justify-center py-6 border-r-primary ${
                selected === "project" ? "bg-white/10 border-r-4" : ""
              }`}>
              <ProjectIcon className="w-[30px] h-[30px]" />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`transition-all ease-in-out duration-300 hover:text-primary w-full flex justify-center py-6 border-r-primary ${
                selected === "contact" ? "bg-white/10 border-r-4" : ""
              }`}>
              <ContactIcon className="w-[30px] h-[30px]" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
