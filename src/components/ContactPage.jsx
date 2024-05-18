import React from "react"
import Navbar from "./Navbar.jsx"
import Skills from "./Skills.jsx"
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
import Html from "../logo/MdiLanguageHtml5"
import R from "../logo/MdiLanguageR"
import Tailwind from "../logo/MdiTailwind"
import VueJs from "../logo/RiVuejsFill"

export default function ContactPage() {
  const skills = [
    { name: "Java", logo: Java },
    { name: "SpringBoot", logo: SpringBoot },
    { name: "Javascript", logo: JavaScript },
    { name: "Express.js", logo: NodeJs },
    { name: "Vue.js", logo: VueJs },
    { name: "HTML", logo: Html },
    { name: "CSS", logo: CSS },
    { name: "Tailwind", logo: Tailwind },
    { name: "MySQL", logo: MySQL },
    { name: "React.js", logo: R },
    { name: "Typescript", logo: R },
    { name: "Sequelize", logo: R }
  ]

  const anotherSkill = [
    { name: "Basic Git Command", logo: GitHub },
    { name: "Firebase", logo: Firebase },
    { name: "Figma", logo: Figma },
    { name: "Blender", logo: Blender },
    { name: "Adobe Photoshop", logo: Photoshop },
    { name: "Adobe Illustrator", logo: Illustrator },
    { name: "Adobe Premiere Pro", logo: Premiere },
  ]

  return (
    <div className="mt-24 lg:mt-36 mb-10">
      {/* <h1 className="text-center text-5xl font-black text-gray-700 z-50">SKILLS</h1> */}
      <div className="flex flex-col gap-10 sm:gap-10 md:gap-10 xl:gap-10 pb-12 mx-8 sm:mx-16 md:mx-16 xl:mx-16 mt-10">
          <Skills type="CODING" skills={skills} />
          <Skills type="ANOTHER SKILLS" skills={anotherSkill} />
      </div>
    </div>
  )
}
