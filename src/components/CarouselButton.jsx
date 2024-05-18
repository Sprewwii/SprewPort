import React, { useState } from "react"
import { Carousel } from "@material-tailwind/react"

function CarouselButton({ handleSelect, selectedProject, projectNames }) {

  const handleChangeProject = (name) => {
    handleSelect(name)
  }

  return (
    <div className="w-full items-center flex sm:mt-4 gap-x-1 gap-x-4">
      {projectNames.map((project, index) => {
        return (
          <button
            key={index}
            className={`${
              selectedProject === project
                ? "bg-pink-700 text-white"
                : "border border-pink-700 text-pink-700 hover:bg-pink-300 hover:text-white hover:border-pink-300"
            } justify-center lg:w-48 rounded-lg p-4 text-xs lg:text-sm`}
            onClick={() => handleChangeProject(project)}
          >
            <div className="text-center justify-center flex flex-col lg:gap-x-2 lg:flex-row">{index+1} <p className="hidden lg:block">{project}</p></div>
          </button>
        )
      })}
    </div>
  )
}

export default CarouselButton
