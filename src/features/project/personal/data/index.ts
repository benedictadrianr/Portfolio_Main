import { projectType } from "../../type";

import weddingbg from "/img/project/personal/background/undangan-pernikahan-digital.png";
import wedding1 from "/img/project/personal/carousel/wedding1.png";
import wedding2 from "/img/project/personal/carousel/wedding2.png";
import wedding3 from "/img/project/personal/carousel/wedding3.png";
import wedding4 from "/img/project/personal/carousel/wedding4.png";
import wedding5 from "/img/project/personal/carousel/wedding5.png";
import wedding6 from "/img/project/personal/carousel/undangan-pernikahan-digital.png";

import nflixbg from "/img/project/personal/background/netflix.jpg";
import nflix1 from "/img/project/personal/carousel/nflix1.png";
import nflix2 from "/img/project/personal/carousel/nflix2.png";
import nflix3 from "/img/project/personal/carousel/nflix3.png";
import nflix4 from "/img/project/personal/carousel/nflix4.png";
import nflix5 from "/img/project/personal/carousel/netflix.jpg";

import trombonebg from "/img/project/personal/background/landingpage.jpg";
import trombone1 from "/img/project/personal/carousel/landingpage.jpg";
import trombone2 from "/img/project/personal/carousel/trombone1.png";

import bmibg from "/img/project/personal/background/bmi.jpg";
import bmi from "/img/project/personal/carousel/bmi1.png";
import bmi2 from "/img/project/personal/carousel/bmi2.png";

import mushroombg from "/img/project/personal/background/mushroom.png";
import mushroom from "/img/project/personal/carousel/mushroom.png";
import mushroom1 from "/img/project/personal/carousel/mushroom1.png";
import mushroom2 from "/img/project/personal/carousel/mushroom2.png";

import tributebg from "/img/project/personal/carousel/tribute.jpg";
import tribute from "/img/project/personal/carousel/tribute.jpg";
import tribute1 from "/img/project/personal/carousel/tribute1.png";
import tribute2 from "/img/project/personal/carousel/tribute2.png";
import tribute3 from "/img/project/personal/carousel/tribute3.png";

import pln1 from "/img/project/personal/carousel/pln1.png";
import pln2 from "/img/project/personal/carousel/pln2.png";
import pln3 from "/img/project/personal/carousel/pln3.png";
import pln4 from "/img/project/personal/carousel/pln4.png";

export const personalProjectData: projectType[] = [
    {
        id: 1,
        name: "i-Meeting PLN",
        link: "https://imeeting-pln.vercel.app/",
        img: pln1,
        skillSet: [
            "Next.js",
            "Typescript",
            "Drizzle",
        ],
        imgCarousel: [
            pln1,
            pln2,
            pln3,
            pln4,
        ],
    },
    {
        id: 2,
        name: "Wedding Invitation",
        link: "https://benedictadrianr.github.io/Undangan-Pernikahan-Digital/",
        img: weddingbg,
        skillSet: [
            "HTML",
            "Javascript",
            "Bootstrap",
        ],
        imgCarousel: [
            wedding6,
            wedding1,
            wedding2,
            wedding3,
            wedding4,
            wedding5,
        ],
    },
    {
        id: 3,
        name: "NFlix Landing Page",
        link: "https://benedictadrianr.github.io/nflixlandpage/",
        img: nflixbg,
        skillSet: [
            "HTML",
            "CSS",
            "Javascript",
        ],
        imgCarousel: [
            nflix5,
            nflix1,
            nflix2,
            nflix3,
            nflix4,
        ],
    },
    {
        id: 4,
        name: "Trombone Landing Page",
        link: "https://benedictadrianr.github.io/product-landing-page/",
        img: trombonebg,
        skillSet: ["HTML", "CSS", "Javascript"],
        imgCarousel: [
            trombone1,
            trombone2,
        ],
    },
    {
        id: 5,
        name: "BMI Calculator",
        link:
            "https://revou-fundamental-course.github.io/10-jul-23-rianrich123/",
        img: bmibg,
        skillSet: [
            "HTML",
            "CSS",
            "Javascript",
        ],
        imgCarousel: [
            bmi,
            bmi2,
        ],
    },
    {
        id: 6,
        name: "Gameshop Website",
        link: "https://benedictadrianr.github.io/mushroom-gaming",
        img: mushroombg,
        skillSet: [
            "ReactJS",
            "TailwindCSS",
        ],
        imgCarousel: [
            mushroom,
            mushroom1,
            mushroom2,
        ],
    },
    {
        id: 7,
        name: "Biography",
        link: "https://benedictadrianr.github.io/stephen-king-tribute-page/",
        img: tributebg,
        skillSet: [
            "HTML",
            "CSS",
            "Javascript",
        ],
        imgCarousel: [
            tribute,
            tribute1,
            tribute2,
            tribute3,
        ],
    },
];
