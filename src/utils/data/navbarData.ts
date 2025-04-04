import { IconType } from "react-icons";
import { FaRegUser as ProfileIcon } from "react-icons/fa";
import { IoGridOutline as ProjectIcon } from "react-icons/io5";
// import { MdOutlinePhone as ContactIcon } from "react-icons/md";

export type NavbarProps = {
    id: number;
    name: string;
    icon: IconType;
};

export const navbarData: NavbarProps[] = [
    {
        id: 1,
        name: "Profile",
        icon: ProfileIcon,
    },
    {
        id: 2,
        name: "Experience",
        icon: ProfileIcon,
    },
    {
        id: 3,
        name: "Project",
        icon: ProjectIcon,
    },
    // {
    //     id: 4,
    //     name: "Contact",
    //     icon: ContactIcon,
    // },
];
