import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import GitHub from "../logo/MdiGithub"
import TablerLink from "../logo/TablerLink"
import Figma from "../logo/PhFigmaLogoBold"

export default function ProjectList(props) {
  return (
    <div>
      <a className="relative block group sm:h-[550px] md:h-[500px] xl:h-[450px]">
        <span className="absolute inset-0 border-2 border-black border-dashed"></span>

        <div className="p-8 relative flex flex-col items-start h-full transition-transform transform bg-white border-2 border-black -translate-x-2 -translate-y-2">
          <div class="flex justify-start items-start mb-2">
            <strong class="relative h-6 p-3 text-xs sm:text-sm md:text-sm xl:text-sm leading-6 uppercase bg-pink-300 border-2 border-black -mt-12">
              <p className="-mt-3">{props.project.position}</p>
            </strong>
          </div>

<img src={props.project.img} className="h-[100px] w-full object-contain"/>
          {/* <div className={`w-full h-full bg-cover`} style={{backgroundImage: `url(${props.project.img})`}}> */}
    {/* </div> */}
          <div className="transition-opacity ">
            <h2 className="mt-5 text-xl sm:text-2xl md:text-2xl xl:text-2xl font-black">
              {props.project.nameProject}
            </h2>

            <p className="my-2 text-gray-600">{props.project.descrption}</p>
            {/* <strong class="flex relative h-6 p-3 text-sm leading-6 bg-gray-200">
              <p className="-mt-3">{props.project.interestingFunction}</p>
            </strong> */}
            <div className="flex flex-row flex-wrap gap-2">
              {props.project.interestingFunction.map((project, i) => (
                <strong class=" border text-pink-700 text-sm border-current px-5 py-1.5 rounded-full tracking-wide">
                  {project}
                </strong>
              ))}
            </div>
            <div className="flex flex-row justify-end absolute right-0 bottom-0 mb-7 mr-7 mt-2">
              <a href={props.project.link}>
                <TablerLink />
              </a>
              {props.project.linkGit && (
                <a href={props.project.linkGit} className="ml-1" >
                  <GitHub height="2em" width="2em"/>
                </a>
              )}
              {props.project.linkFigma && (
                <a href={props.project.linkFigma} className="ml-1">
                  <Figma />
                </a>
              )}
            </div>
          </div>

          <div className=" p-8 transition-opacity opacity-100 relative">
            <Link className="mt-8 font-bold" to={props.project.link}></Link>
          </div>
        </div>
      </a>
    </div>
  )
}
