import React from "react"

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-16 sm:mt-28 md:mt-28 xl:mt-28 flex-col text-gray-700">
      <span className="text-center font-black mt-5 z-40 text-6xl xl:text-9xl">SUPICHA</span>
      <span id="surname" className="text-center text-3xl font-extrabold tracking-widest z-40 xl:text-6xl">PIRIYASIRIPHAN</span>
      {/* <span className="text-center text-3xl font-bold tracking-widest z-50 mt-7">BACK-END DEVELOPER</span> */}
      <div className="absolute bottom-0 flex justify-center">
      <img src="./prew.png" className="opacity-90 z-10 h-full w-full sm:w-2/3 lg:w-2/5 xl:h-full xl:w-[50%]"/>
      </div>
      <div className="flex flex-col jestify-center xl:absolute xl:left-0 xl:bottom-0 w-3/5 xl:w-1/5 xl:ml-16 xl:mb-16 z-40">
      <span className="text-center text-base xl:text-left xl:text-xl font-extrabold tracking-widest z-40 mt-7">BACK-END DEVELOPER</span>
<br />
      <span className="text-sm text-center xl:text-lg xl:text-left -mt-4">
      I would appreciate an experience in the back-end developer internship for six months and applying it in professional practice in the future.
      </span>
      </div>
    </div>
  )
}