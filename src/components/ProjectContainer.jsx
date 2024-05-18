import React from "react"
import CarouselImage from "./CarouselImage"
import Java from "../logo/MdiLanguageJava"
import SpringBoot from "../logo/SimpleIconsSpring"
import NodeJs from "../logo/MdiNodejs"
import Photoshop from "../logo/SimpleIconsAdobephotoshop"
import Illustrator from "../logo/SimpleIconsAdobeillustrator"
import Premiere from "../logo/SimpleIconsAdobepremierepro"
import Figma from "../logo/PhFigmaLogoBold"
import Blender from "../logo/MdiBlenderSoftware"
import JavaScript from "../logo/MdiLanguageJavascript"
import MySQL from "../logo/IconMySQL.jsx"
import CSS from "../logo/IonLogoCss3"
import Firebase from "../logo/MdiFirebase"
import GitHub from "../logo/MdiGithub"
import Tailwind from "../logo/MdiTailwind"
import VueJs from "../logo/RiVuejsFill"
import IconReact from "../logo/IconReact"
import IconTypescript from "../logo/IconTypescript"

function ProjectContainer({ project }) {
  const icons = [
    { icon: VueJs, name: "Vue.js" },
    { icon: Tailwind, name: "Tailwind" },
    { icon: Java, name: "Java" },
    { icon: SpringBoot, name: "Spring Boot" },
    { icon: Firebase, name: "Cloud Firestore" },
    { icon: MySQL, name: "MySQL" },
    { icon: NodeJs, name: "Express.js" },
    { icon: IconReact, name: "React.js" },
    { icon: IconTypescript, name: "Typescript" }
  ]

  return (
    <div>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="relative h-56 lg:h-full lg:w-5/6">
          <CarouselImage images={project.images} name={project.name} />

          <div className="flex flex-col gap-y-1 lg:gap-y-5 w-full justify-center items-center left-1/2 -translate-x-1/2 absolute bottom-4 lg:bottom-10 text-white ">
            <p className="text-2xl lg:text-6xl font-black uppercase">
              {project.name}
            </p>
            <div className="text-white flex flex-row items-center gap-x-2 lg:gap-x-4">
              {project.tools.map((tool, index) => {
                const showIcon = icons.find((icon) => icon.name === tool)
                return (
                  <div className="text-xs lg:text-sm flex flex-col lg:flex-row items-center gap-x-2 bg-white/30 p-1 lg:p-2 rounded-sm">
                    {showIcon && <showIcon.icon />}
                    <p className="font-light">{tool}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="lg:w-4/12 mt-4 lg:mt-0 lg:ml-5 flex flex-col gap-y-2 lg:gap-y-6">
          <div className="flex items-center lg:items-start flex-row sm:flex-col gap-x-2 gap-y-1">
            <p className="text-xs lg:text-sm font-light">POSITION</p>
            <p className="text-sm lg:text-base font-normal">{project.position}</p>
          </div>
          <div className="flex items-center lg:items-start  flex-row sm:flex-col gap-x-2">
            <p className="text-xs lg:text-sm font-light">DURATION</p>
            <p className="text-sm lg:text-base font-normal">{project.duration}</p>
          </div>
          <div className="flex items-start flex-row sm:flex-col gap-x-2">
            <p className="text-xs lg:text-sm font-light">DESCRIPTION</p>
            <ul class="list-disc ml-4">
              {project.descriptions.map((desc, index) => {
                return (
                  <li key={index} className="text-sm lg:text-base font-normal pb-1 lg:pb-2">
                    {desc}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex items-center lg:items-start lex-col gap-x-2">
            {
              project.gits.map(git => {
                return <a href={git.link} target="_blank" className="flex flex-row bg-pink-700 rounded-lg p-2 text-sm text-white items-center gap-x-1 ">
              <GitHub />
              <p className="">GIT {git.name}</p>
            </a>
              })
            }
            {/* <div className="flex flex-row bg-pink-700 rounded-lg p-2 text-sm text-white items-center gap-x-1 ">
              <GitHub />
              <p className="">GIT Front-end</p>
            </div>
            <div className="flex flex-row bg-pink-700 rounded-lg p-2 text-sm text-white items-center gap-x-1 ">
              <GitHub />
              <p className="">GIT Back-end</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
