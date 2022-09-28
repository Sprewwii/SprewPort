import React from 'react';
import ProjectList from './projectList.jsx';
import Navbar from "./Navbar.jsx"

export default function ProjectPage() {

    const projects = [
        {position: "Back-end Developer", 
        nameProject: "Meow Run Season 2", 
        img: "./MeowRun.png",
        descrption: "Meow Run Season 2 is a game web application. This gameplay is similar to Cookie Run and Dino TRex",
        interestingFunction: ["Sending Mail Verification", "RESTful API", "Sign Up and Sign In system", "Cors"],
        language: "Vue.js, Express.js and NoSQL(Firebase)",
        link: "https://meowrun.site/",
        linkGit: "https://github.com/mosqto2001/MeowRun-2-Backend/tree/main/functions"
        },
        {position: "Back-end Developer", 
        nameProject: "Mana Clinic", 
        img: "./ManaClinic.png",
        descrption: "Mana Clinic is a web application that helps to create, edit, delete, and manage scheduled events.",
        interestingFunction: ["Custom throw Exception", "RESTful API", "Authentication System (Token)", "Integrate with Front-end and Database"],
        language: "Vue.js, SpringBoot and MySQL",
        link: "https://intproj21.sit.kmutt.ac.th/or1/",
        linkGit: "https://github.com/Sprewwii/INT221-Backend"
        },
        {position: "Front-end Developer", 
        nameProject: "KongChana", 
        img: "./KongChana.png",
        descrption: "KongChana was a web application that checks scammers on online shopping and helps users not to be tricked by scammers.",
        interestingFunction: ["CRUD System", "Json-Server"],
        language: "Vue.js",
        link: "https://kongchana-c99fe.web.app/",
        linkGit: "https://github.com/Sprewwii/INT203-GROUP5-115-PROJECT"
        },
        {position: "President", 
        nameProject: "SIT Volunteer 2021", 
        img: "./Volunteer.jpg",
        descrption: "This camp was to create learning materials. These materials can help blind students to enhance creativity.",
        interestingFunction: ["Storytelling Clips", "Braille Vocabulary Flashcards", "Braille Books", "Donations" ],
        language: "",
        link: "https://www.sit.kmutt.ac.th/blog/info_announcement/sit-volunteer-2021-%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9E%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87/",
        linkGit: ""
        },
        {position: "President of Web Design Team", 
        nameProject: "SIT Hello World 2021", 
        img: "./HelloWorld.png",
        descrption: "This camp was to create learning materials. These materials can help blind students to enhance creativity.",
        interestingFunction: ["Storytelling Clips", "Braille Vocabulary Flashcards", "Braille Books", "Donations" ],
        language: "",
        link: "https://helloworld-ermine.web.app/",
        linkGit: "https://www.figma.com/file/tcKAg2rgZlk3kcRpo6UOcA/Hello-Ermine?node-id=0%3A1"
        }

    ]
    return (
        <div className="mt-28 overflow-y-auto">
        <h1 className="text-center text-5xl font-black text-gray-700 mt-5 z-50 ">WORK EXPERIENCE</h1>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 py-12 mx-24">
            {projects.slice(0,2).map((project, i) => <ProjectList project={project} key={i} />)}
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 pb-12 mx-24">
            {projects.slice(2).map((project, i) => <ProjectList project={project} key={i} />)}
        </div>
        </div>
    )
}