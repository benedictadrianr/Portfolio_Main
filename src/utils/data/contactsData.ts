import { IconType } from "react-icons";
import {
    FaGithub as GithubIcon,
    FaInstagram as InstagramIcon,
    FaLinkedin as LinkedInIcon,
} from "react-icons/fa";

type ContactsDataType = {
    id: number;
    url: string;
    icon: IconType;
};

export const contactsData: ContactsDataType[] = [
    {
        id: 1,
        url: "https://github.com/benedictadrianr",
        icon: GithubIcon,
    },
    {
        id: 2,
        url: "https://www.instagram.com/benedictadrianr?igsh=bG9ua3NsNHE1MDFp",
        icon: InstagramIcon,
    },
    {
        id: 3,
        url: "https://www.linkedin.com/in/benedictadrianr/",
        icon: LinkedInIcon,
    },
];
