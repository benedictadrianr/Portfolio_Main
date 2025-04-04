import { projectType } from "../../type";

import wedding1 from "/img/project/personal/carousel/wedding1.png";
import wedding2 from "/img/project/personal/carousel/wedding2.png";
import wedding3 from "/img/project/personal/carousel/wedding3.png";
import wedding4 from "/img/project/personal/carousel/wedding4.png";
import wedding5 from "/img/project/personal/carousel/wedding5.png";
import wedding6 from "/img/project/personal/carousel/undangan-pernikahan-digital.png";

import nflix1 from "/img/project/personal/carousel/nflix1.png";
import nflix2 from "/img/project/personal/carousel/nflix2.png";
import nflix3 from "/img/project/personal/carousel/nflix3.png";
import nflix4 from "/img/project/personal/carousel/nflix4.png";
import nflix5 from "/img/project/personal/carousel/netflix.jpg";

import trombone1 from "/img/project/personal/carousel/landingpage.jpg";
import trombone2 from "/img/project/personal/carousel/trombone1.png";

import bmi from "/img/project/personal/carousel/bmi1.png";
import bmi2 from "/img/project/personal/carousel/bmi2.png";

import mushroom from "/img/project/personal/carousel/mushroom.png";
import mushroom1 from "/img/project/personal/carousel/mushroom1.png";
import mushroom2 from "/img/project/personal/carousel/mushroom2.png";

import tribute from "/img/project/personal/carousel/tribute.jpg";
import tribute1 from "/img/project/personal/carousel/tribute1.png";
import tribute2 from "/img/project/personal/carousel/tribute2.png";
import tribute3 from "/img/project/personal/carousel/tribute3.png";

export const personalProjectData: projectType[] = [
    {
        id: 1,
        name: "Wedding Invitation",
        link: "https://benedictadrianr.github.io/Undangan-Pernikahan-Digital/",
        img: "https://egwlwjugyuksxfwceoqy.supabase.co/storage/v1/object/public/Portfolio/Project_Images/undangan-pernikahan-digital.png",
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
        id: 2,
        name: "NFlix Landing Page",
        link: "https://benedictadrianr.github.io/nflixlandpage/",
        img: "https://egwlwjugyuksxfwceoqy.supabase.co/storage/v1/object/public/Portfolio/Project_Images/netflix.jpg?t=2024-08-06T07%3A43%3A40.034Z",
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
        id: 3,
        name: "Trombone Landing Page",
        link: "https://benedictadrianr.github.io/product-landing-page/",
        img: "https://egwlwjugyuksxfwceoqy.supabase.co/storage/v1/object/public/Portfolio/Project_Images/landingpage.jpg?t=2024-08-06T07%3A55%3A02.663Z",
        skillSet: ["HTML", "CSS", "Javascript"],
        imgCarousel: [
            trombone1,
            trombone2,
        ],
    },
    {
        id: 4,
        name: "BMI Calculator",
        link:
            "https://revou-fundamental-course.github.io/10-jul-23-rianrich123/",
        img: bmi,
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
        id: 5,
        name: "Gameshop Website",
        link: "https://benedictadrianr.github.io/mushroom-gaming",
        img: "https://egwlwjugyuksxfwceoqy.supabase.co/storage/v1/object/public/Portfolio/Project_Images/mushroom.png?t=2024-08-06T07%3A49%3A12.440Z",
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
        id: 6,
        name: "Biography",
        link: "https://benedictadrianr.github.io/stephen-king-tribute-page/",
        img: "https://egwlwjugyuksxfwceoqy.supabase.co/storage/v1/object/public/Portfolio/Project_Images/tribute.jpg?t=2024-08-06T07%3A51%3A55.237Z",
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
