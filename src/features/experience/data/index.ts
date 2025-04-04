import { ExperienceType } from "../type";

import LamitechOverview from "/img/experience/lamitech/overview.png";
import LamitechPreview from "/img/experience/lamitech/preview.png";
import LamitechHighlight from "/img/experience/lamitech/highlight.png";
import LamitechLearnt from "/img/experience/lamitech/learnt.png";

import OptservPreview from "/img/experience/optserv/preview.webp";
import OptservOverview from "/img/experience/optserv/overview.png";
import OptservHighlight from "/img/experience/optserv/highlight.png";
import OptservLearnt from "/img/experience/optserv/learnt.png";

import RBPreview from "/img/experience/round_bytes/preview.png";
import RBOverview from "/img/experience/round_bytes/overview.png";
import RBHighlight from "/img/experience/round_bytes/highlight.png";
import RBLearnt from "/img/experience/round_bytes/learnt.png";

export const ExperienceData: ExperienceType[] = [
    {
        id: 1,
        companyName: "Round Bytes",
        jobDesc: "Frontend Engineer",
        jobType: "Internship",
        timeStart: new Date("2024-04-01"),
        timeFinish: new Date("2024-06-01"),
        description:
            "Assisting in developing websites for client according to their preferred design of the brand, \
            \
            Create reusable components, create functional reusable logical code, fix bugs and improve component's design and stability.",
        skills: [
            "React",
            "Typescript",
            "Tailwind",
            "Next JS",
            "Sanity CMS",
        ],
        previewImg: RBPreview,
        overview:
            "This was my first professional role as a Frontend Engineering intern at Round Bytes, a SaaS company specializing in website development for business marketing./nI focused on learning and assisting with UI/UX design, bug fixes, and component development.",
        overviewImg: RBOverview,
        highlight:
            "There are a lot of things I do that does not worth highlighting, however one of the tasks that is worth noting is creating an attractive Project Card Components that has quite work of animation. \
            \
            This task is what got me in Developing an attractive UI so that user will be more attracted to the app.",
        highlightImg: RBHighlight,
        learnt:
            "What I learned the most in the 3 months I was an intern at Round Bytes is learning Typescript, it is a Type Safety features for react that ensures that the data that was used or passed through a component is a correct type. \
            \
            In my opinion this knowledge is very crucial in getting me far as a Frontend Engineer and there will be a lot of more things to learn even for Typescript",
        learntImg: RBLearnt,
        previewBullet: [
            "Assisting in developing websites for client",
            "Create reusable components and functions",
            "Fix bugs and improve component's design and stability",
        ],
        highlightPoint: [
            "Developing project card state, animations, and transitions",
            "Assisting in creating pages for RoundBytes",
            "Fixing persistent bugs and errors that hindered the website",
        ],
        learntPoint: [
            "Collaborated with a team of developers with diverse coding styles",
            "Gained proficiency in React, TypeScript, and Next.js",
            "Learned to create reusable components and functions",
        ],
    },
    {
        id: 2,
        companyName: "Round Bytes",
        jobDesc: "Frontend Engineer",
        jobType: "Contract",
        timeStart: new Date("2024-07-01"),
        timeFinish: new Date("2024-08-01"),
        description:
            'Assisting in developing "Optserv", an All In One Startup Management Software designed to manage startup companies. \
            \
            Create reusable components, develop reusable and functional logical rendering code to manage data from backend to frontend, fix bugs and improve component\'s design and stability',
        skills: [
            "React",
            "Typescript",
            "Tailwind",
            "Supabase",
            "Rest API",
        ],
        previewImg: OptservPreview,
        overview:
            "After a three-month internship at Round Bytes, the CEO hired me as a Contract Worker to help develop *Optserv*, a Company Management System for startups. I contributed to the project using React and TypeScript for the frontend and Supabase for the backend, focusing on building reusable components, code, and APIs.",
        overviewImg: OptservOverview,
        highlight:
            "One of the task I was working on is a Teamspace Section, specifically in the task section where you can assign task to an employee with a detailed description of that task.\
            \
            I used a BlockNoteEditor for the text editor and using JsonB as the value, most of the property like Title, Asignee, Status, Priority, and Date I simply used Input Components, Select Component, and a React Date Picker.",
        highlightImg: OptservHighlight,
        learnt:
            "While I was working on assisting the project I learned how to integrate database infrastructure to the frontend app, by using Supabase I also learned how to create react app that needs user to be logged in.\
            \
            By using Supabase authenticator user can log in using email, google, etc. Supabase also provides a table editor to store data that can be called using REST API, additionally it can store file like images, pdf, etc.",
        learntImg: OptservLearnt,
        previewBullet: [
            "Contribute 30% in Developing 'Optserv' an All in One startup management Software",
            "Create reusable components and functions",
            "Fix bugs and improve component's design and stability",
        ],
        highlightPoint: [
            "Teamspace system with BlockNoteEditor for writing notes and sharing documents among colleagues",
            "Employee management system for tracking each employee and storing professional data",
            "Finance system for monitoring company sales and expenses",
        ],
        learntPoint: [
            "Exchanged ideas with developers to collaboratively solve project challenges",
            "Learned to integrate the frontend with the backend environment",
            "Designed website infrastructure with multiple rooted tabs for accessing different content",
        ],
    },
    {
        id: 3,
        companyName: "Round Bytes",
        jobDesc: "Frontend Engineer",
        jobType: "Contract",
        timeStart: new Date("2024-09-01"),
        timeFinish: new Date("2024-10-01"),
        description:
            "I was involved in the development of a website for PT. Lamitech Indonesia, an e-commerce platform specializing in selling plant nutrition and supplements.\
            \
            Additionally create an admin side interface to update products information and processing orders.",
        skills: [
            "React",
            "Typescript",
            "Tailwind",
            "Supabase",
            "Rest API",
        ],
        previewImg: LamitechPreview,
        overview:
            "My role involved designing and implementing components to enhance user experience and streamline the online shopping process. I also contributed to site functionality and performance by developing an admin interface for managing products and processing customer orders.",
        overviewImg: LamitechOverview,
        highlight:
            "In my time working on this project there is quite a lot that I can point as a highlight however there is only one thing that I can point out is how I was able to make a functional e-commerce website with 2 side interface where admin can create and update products while customer can purchase products and track their order.",
        highlightImg: LamitechHighlight,
        learnt:
            "The things I learnt the most while working on this project is probably how I can connect a logistic API (JNE & J&T) to check delivery cost, generate airwaybill, and checking delivery status.",
        learntImg: LamitechLearnt,
        previewBullet: [
            "Contribute 60% in Developing PT Lamitech Indonesia's e-commerce website",
            "Create admin side interface / dashboard",
            "Work along with developer & designer team along with client's needs",
        ],
        highlightPoint: [
            "Developed a functional e-commerce website with dual interfaces (Admin/Customer)",
            "Enabled seamless transactions for Admin and Customers using a Point of Sale system",
            "Automated sales tracking and recording within the finance system",
        ],
        learntPoint: [
            "Integrated and collaborated with a third-party logistics API and its backend team",
            "Managed project development while navigating deadlines and blockers",
            "Developed a shopping cart system to enhance the browsing experience",
        ],
    },
];
