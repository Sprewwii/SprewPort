import React from 'react';
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
import MySQL from "../logo/CibMysql"
import CSS from "../logo/IonLogoCss3"
import Firebase from "../logo/MdiFirebase"
import GitHub from "../logo/MdiGithub"
import Html from "../logo/MdiLanguageHtml5"
import R from "../logo/MdiLanguageR"
import Tailwind from "../logo/MdiTailwind"
import VueJs from "../logo/RiVuejsFill"
import ContactMe from './ContactMe.jsx'
import Home from "../logo/IonHome"
import Mail from "../logo/IonIosMail"
import Phone from "../logo/IonCall"
import Github from "../logo/MdiGithub"

export default function ContactPage() {
    const skills = [
        {name: "Java", logo: Java}, 
        {name: "SpringBoot", logo:SpringBoot}, 
        {name:"JavaScript", logo: JavaScript}, 
        {name:"Node.js and Express.js", logo: NodeJs},
        {name:"Vue.js", logo: VueJs},
        {name:"HTML", logo: Html},
        {name:"CSS", logo: CSS},
        {name:"Tailwind", logo: Tailwind},
        {name:"MySQL", logo: MySQL},
        {name:"R", logo: R}]

        const anotherSkill = [
            {name: "Adobe Photoshop", logo: Photoshop},
            {name: "Adobe Illustrator", logo: Illustrator},
            {name: "Adobe Premiere Pro", logo: Premiere}
            ,{name:"GitHub", logo: GitHub},
            {name:"Firebase", logo: Firebase},
            {name: "Figma", logo: Figma},
            {name: "Blender", logo: Blender},
            
        ]

    const contacts = [
        {logo: Phone, detail:"095 479 6673"},
        {logo: Mail, detail:"Supicha.prew@mail.kmutt.ac.th"},
        {logo: GitHub, detail:"Sprewwii"},
        {logo: Home, detail:"29/89 Chomthong Rd., Bang Kho, Chom Thong, Bangkok 10150"}
    ]
    return (
        <div className="mt-28 mb-10">
            <h1 className="text-center text-5xl font-black text-gray-700 z-50">SKILLS</h1>
            <div className="flex gap-2 sm:gap-10 md:gap-10 xl:gap-10 pb-12 mx-4 sm:mx-16 md:mx-16 xl:mx-16 mt-10">
            
            <div className=""><Skills type="coding" skills={skills}/></div>
            <div className=""><Skills type="Another Skill" skills={anotherSkill} className=""/></div>

        </div>

        <h1 className="text-center text-5xl font-black text-gray-700 z-50">CONTACT</h1>
        <div className="flex flex-col xl:flex-row gap-y-5 xl:gap-x-10 justify-center items-center mt-16">
        {contacts.map((contact, i) => <ContactMe className="" contact={contact} key={i} />)}
        </div>
        </div>
    )
}