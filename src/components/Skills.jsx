import React from "react"

export default function Skills(props) {
  return (
    <div className="w-full">
      {/* <div className="w-full bg-white relative flex items-end transition border-2 border-black -translate-x-2 -translate-y-2 shadow-[8px_8px_0_0_#000] p-6"> */}
      <div className="w-full justify-center flex flex-col items-center opacity-100">
        <div className="flex justify-center items-center gap-4 w-64 lg:w-96 mb-4 lg:mb-9">
          <div className="w-full h-[1px] bg-gray-700"></div>
          <p className="text-xl whitespace-nowrap font-bold text-gray-700">{props.type}</p>
          <div className="w-full h-[1px] bg-gray-700"></div>
        </div>
        <p className="text-2xl font-bold"></p>
        <div className={ `${props.type === "CODING" ? `grid-cols-4 lg:grid-cols-6` : `grid-cols-4 lg:grid-cols-7`} relative flex-wrap w-full grid  flex-row justify-center text-center items-center gap-5 sm:gap-10 lg:gap-10 xl:gap-10`}>
          {props.skills.map((skill, i) => (
            <div className="flex flex-col justify-center items-center  text-base sm:text-base md:text-base xl:text-base">
              <skill.logo
                width="2em"
                height="2em"
                className="w-[1.5em] h-[1.5em] text-gray-700"
              />
              <p className="text-sm text-gray-700/90">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-lg font-medium leading-relaxed">
          {/* {props.skill.name} */}
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}
