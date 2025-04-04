import { projectType } from "../../type";

import OptservBG from "/img/experience/optserv/preview.webp";
import LamitechBG from "/img/experience/lamitech/preview.png";

import lamitech1 from "/img/experience/lamitech/overview.png";
import lamitech2 from "/img/experience/lamitech/highlight.png";
import lamitech3 from "/img/experience/lamitech/learnt.png";

import optserv1 from "/img/experience/optserv/overview.png";
import optserv2 from "/img/experience/optserv/highlight.png";
import optserv3 from "/img/experience/optserv/learnt.png";

export const companyProjects: projectType[] = [
    {
        id: 1,
        name: "Optserv",
        link: "https://optserv.ai",
        img: OptservBG,
        duration: [
            new Date("07-01-2024"),
            new Date("08-01-2024"),
        ],
        imgCarousel: [
            optserv1,
            optserv2,
            optserv3,
        ],
        skillSet: [
            "ReactJS",
            "Typescript",
            "Supabase",
        ],
    },
    {
        id: 2,
        name: "Lamitech Indonesia",
        link: "https://lamitechindonesia.com",
        img: LamitechBG,
        duration: [
            new Date("09-01-2024"),
            new Date("10-01-2024"),
        ],
        imgCarousel: [
            lamitech1,
            lamitech2,
            lamitech3,
        ],
        skillSet: [
            "ReactJS",
            "Typescript",
            "Supabase",
        ],
    },
];
