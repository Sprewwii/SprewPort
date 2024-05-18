import React from "react"

function ActivitiyCard({ experience, index }) {
  return (
    <div className={index == 0 ? 'row-span-2' : index == 3 || index == 2 ? 'col-span-2' : ""}>
      <div className="relative block group sm:h-[550px] md:h-full xl:h-full">
        <span className="absolute inset-0 rounded-lg border-gray-700/50 border-2 border-black border-dashed"></span>

        <div className="p-8 relative flex flex-col items-start h-full transition-transform transform rounded-lg bg-white border-2 border-gray-700 -translate-x-2 -translate-y-2">
          {experience.position && (
            <div className="flex justify-start items-start mb-2">
              <strong className="relative h-6 p-3 text-xs sm:text-sm md:text-sm xl:text-sm leading-6 uppercase bg-pink-300 border-2 border-black -mt-12">
                <p className="-mt-3">{experience.position}</p>
              </strong>
            </div>
          )}

          <img src="" className="h-[100px] w-full object-contain" />
          <div className="transition-opacity  ">
            <h2 className="mt-5 text-xl sm:text-2xl md:text-2xl xl:text-2xl font-black">
            {experience.name}
            </h2>

            <p className="mb-2 text-gray-600 text-sm sm:text-sm md:text-sm xl:text-base">
              description
            </p>

            <div className="flex flex-row flex-wrap gap-1 my-1">
              <span
                // key={i}
                className=" border-2 border-pink-700 rounded-xl text-pink-700 text-xs sm:text-xs md:text-xs xl:text-sm border-lg px-1 py-1 tracking-wide"
              >
                project
              </span>
            </div>
            {/* <div className="flex flex-row justify-end absolute right-0 bottom-0 mb-7 mr-7 mt-2">
              <a href={props.project.link}>
                <TablerLink />
              </a>
              {props.project.linkGit && (
                <a href={props.project.linkGit} className="ml-1">
                  <GitHub height="2em" width="2em" />
                </a>
              )}
              {props.project.linkFigma && (
                <a href={props.project.linkFigma} className="ml-1">
                  <Figma />
                </a>
              )}
            </div> */}
          </div>
          {/* 
          <div className=" p-8 transition-opacity opacity-100 relative">
            <Link className="mt-8 font-bold" to={props.project.link}></Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ActivitiyCard
