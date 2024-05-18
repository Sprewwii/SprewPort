import React from "react"

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-10 xl:mt-16 sm:mt-28 md:mt-28 xl:mt-28 flex-col text-gray-700">
      <span className=" text-center font-black mt-5 z-40 text-6xl xl:text-9xl">
        SUPICHA
      </span>
      <span
        id="surname"
        className="text-center text-3xl font-extrabold tracking-widest z-40 xl:text-6xl"
      >
        PIRIYASIRIPHAN
      </span>
      <div className="absolute bottom-4 flex justify-center mb-5 xl:mb-10 w-11/12 xl:w-1/3">
        <img src="/image/prew.PNG" className="opacity-90 z-10 h-full w-full" />
      </div>
      <div className="flex flex-col jestify-center xl:absolute xl:left-0 xl:bottom-10 w-4/6 xl:w-3/12 xl:ml-16 xl:mb-16 z-40">
        <span className="text-center text-base xl:text-left xl:text-xl font-extrabold tracking-widest z-40 mt-7">
          BACK-END DEVELOPER
        </span>
        <br />
        <span className="text-sm text-center xl:text-lg xl:text-left -mt-4">
        I have acquired experience in backend development through internships and part-time jobs. 
        My soft skills allow me to adapt and perform effectively within your company. 
        I am eager to apply my skills in a professional environment moving forward.
        </span>
      </div>
    </div>
  )
}
