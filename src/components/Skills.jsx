import React from "react"
import Navbar from "./Navbar.jsx"
import CibMysql from "../logo/CibMysql.jsx"

export default function Skills(props) {
  return (

      <div class="w-full">
        <div class="w-full bg-white relative flex items-end transition border-2 border-black -translate-x-2 -translate-y-2 shadow-[8px_8px_0_0_#000] p-8">
          <div class="relative w-full opacity-100">
            <div class="flex justify-start items-start mb-2">
              <strong class="relative h-6 p-3 text-sm leading-6 uppercase bg-pink-300 border-2 border-black -mt-12">
                <p className="-mt-3">{props.type}</p>
              </strong>
            </div>
            <p class="text-2xl font-bold"></p>
            <div class="relative flex-wrap w-full flex  flex-row justify-center items-center gap-10 mt-5">
              {props.skills.map((skill, i) => (
                <div className="flex flex-col justify-center items-center text-gray-700">
                  <skill.logo width="2em" height="2em"/>
                  {skill.name}
                </div>
              ))}
            </div>
            <div class="mt-4 text-lg font-medium leading-relaxed">
              {/* {props.skill.name} */}
            </div>
          </div>
        </div>
      </div>
   
  )
}
