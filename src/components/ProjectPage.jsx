import React, { useState } from "react"
import CarouselButton from "./CarouselButton"
import ProjectContainer from "./ProjectContainer"

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState({
    name: "PomPom",
    images: [
      "../../image/pompom/pompom_1.png",
      "../../image/pompom/pompom_2.png",
    ],
    position: "Fullstack Developer",
    duration: "Oct 2023 - Present",
    descriptions: [
      "A web application and LINE chatbot are designed for the automated generation of travel itineraries across Thailand.",
      "Users can skip the manual trip planning process as PomPom seamlessly integrates ChatGPT 4.0, TAT API, and Google Maps to create the most fitting and optimal travel experiences.",
      "Design a database using MySQL and analyze users' data to determine their travel preferences."
    ],
    tools: ["React.js", "Tailwind", "Typescript", "Express.js", "MySQL"],
    gits: [
      {
        name: "Front-end",
        link: "https://gitfront.io/r/mosqto/cKRADH1xzRvC/pompom-frontend"
      },
      {
        name: "Back-end",
        link: "https://gitfront.io/r/mosqto/2QFSJ6PquxKG/pompom-backend/"
      }
    ]
  })

  const projects = [
    {
      name: "PomPom",
      images: [
        "../../image/pompom/pompom_1.png",
        "../../image/pompom/pompom_2.png",
        "../../image/pompom/pompom_3.png",
        "../../image/pompom/pompom_4.png"
      ],
      position: "Fullstack Developer",
      duration: "Oct 2023 - Present",
      descriptions: [
        "A web application and LINE chatbot are designed for the automated generation of travel itineraries across Thailand.",
        "Users can skip the manual trip planning process as PomPom seamlessly integrates ChatGPT 4.0, TAT API, and Google Maps to create the most fitting and optimal travel experiences.",
        "Design a database using MySQL and analyze users' data to determine their travel preferences."
      ],
      tools: ["React.js", "Tailwind", "Typescript", "Express.js", "MySQL"],
      gits: [
        {
          name: "Front-end",
          link: "https://gitfront.io/r/mosqto/cKRADH1xzRvC/pompom-frontend"
        },
        {
          name: "Back-end",
          link: "https://gitfront.io/r/mosqto/2QFSJ6PquxKG/pompom-backend/"
        }
      ]
    },
    {
      name: "Portfolio",
      images: [
        "../../image/port/port_1.png",
        "../../image/port/port_2.png",
        "../../image/port/port_3.png",
        "../../image/port/port_4.png"
      ],
      position: "Front-end Developer",
      duration: "Sep 2022 - Present",
      descriptions: [
        "A web application created to assemble and present my project, including significant experience within the university."
      ],
      tools: ["React.js", "Tailwind"],
      gits: [
        {
          name: "Front-end",
          link: ""
        }
      ]
    },
    {
      name: "Intern SIT",
      images: [
        "../../image/intern/intern_1.png",
        "../../image/intern/intern_2.png",
        "../../image/intern/intern_3.png",
        "../../image/intern/intern_4.png"
      ],
      position: "Front-end Developer",
      duration: "Aug 2023 - Sep 2023",
      descriptions: [
        "An internal project within the Information Technology faculty is designed to provide internship knowledge to junior students.",
        "Sharing fundamental information sources about IT work.",
        "The web application has mini-games for participants to explore their true interests, helping uncover individual preferences."
      ],
      tools: ["React.js", "Tailwind"],
      gits: [
        {
          name: "Front-end",
          link: "https://gitfront.io/r/Supicha/KcCpyyHqKW79/internsit/"
        }
      ]
    },
    {
      name: "Review SIT",
      images: [
        "../../image/review/review_1.png",
        "../../image/review/review_2.png",
        "../../image/review/review_3.png",
        "../../image/review/review_4.png"
      ],
      position: "Fullstack Developer",
      duration: "Aug 2023 - Sep 2023",
      descriptions: [
        "A web application created to share reviews and short notes on courses within the School of Information Technology faculty for junior students. The primary purpose is to exchange knowledge and techniques among senior and junior students.",
        "All document summaries on the website were created by me."
      ],
      tools: ["React.js", "Tailwind", "Express.js"],
      gits: [
        {
          name: "Front-end",
          link: "https://gitfront.io/r/mosqto/tyVbLHcswztx/ReviewSIT/"
        },
        {
          name: "Back-end",
          link: "https://gitfront.io/r/prew/V8LUxYE6Ks7M/reviewSIT-backend/"
        }
      ]
    },
    {
      name: "Meow Run Season 2",
      images: [
        "../../image/meowrun/meowrun_1.png",
        "../../image/meowrun/meowrun_2.png",
        "../../image/meowrun/meowrun_3.png",
        "../../image/meowrun/meowrun_4.png"
      ],
      position: "Back-end Developer",
      duration: "Jun 2022 - Oct 2022",
      descriptions: [
        "A web-based game application. The gameplay is similar to Cookie Run and Dino T-Rex.",
        "There are more than 3000 players."
      ],
      tools: ["Vue.js", "Tailwind", "Express.js", "Cloud Firestore"],
      gits: [
        {
          name: "Front-end",
          link: "https://gitfront.io/r/prew/Rhu16Y3UPVeF/meowrun2/"
        },
        {
          name: "Back-end",
          link: "https://gitfront.io/r/prew/dRXgzBo8i3iK/MeowRun-2-Backend/"
        }
      ]
    },
    {
      name: "Mana Clinic",
      images: [
        "../../image/mana/mana_1.png",
        "../../image/mana/mana_2.png",
        "../../image/mana/mana_3.png",
        "../../image/mana/mana_4.png"
      ],
      position: "Back-end Developer",
      duration: "Apr 2022 - Dec 2022",
      descriptions: [
        "A web application assists in creating, editing, deleting, and managing scheduled events."
      ],
      tools: ["Vue.js", "Tailwind", "MySQL", "Java", "Spring Boot"],
      gits: [
        {
          name: "Front-end",
          link: "https://gitfront.io/r/Supicha/g2fwQ6Pf52Gm/INT221-2021-OR-1/"
        },
        {
          name: "Back-end",
          link: "https://gitfront.io/r/Supicha/xkpBdaYjxMEP/INT221-Backend/"
        }
      ]
    }
  ]

  const projectNames = projects.map((project) => project.name)

  function handleSelect(name) {
    const select = projects.find((project) => project.name === name)
    setSelectedProject(select)
  }

  return (
    <div className="my-20 lg:my-24 overflow-y-auto flex flex-col justify-center items-center gap-y-8">
      {/* <h1 className="text-center text-3xl font-black text-gray-700">
        WORK EXPERIENCE
      </h1> */}

      <div>
        <CarouselButton
          handleSelect={handleSelect}
          selectedProject={selectedProject.name}
          projectNames={projectNames}
        />
      </div>

      <div className="flex-col w-full px-4 lg:px-24">
        <ProjectContainer project={selectedProject} />
      </div>
    </div>
  )
}
