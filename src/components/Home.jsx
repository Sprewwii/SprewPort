import React from "react"

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-28 flex-col text-gray-700">
      <span className="text-center text-9xl font-black mt-5 z-50">SUPICHA</span>
      <span id="surname" className="text-center text-6xl font-extrabold tracking-widest z-50">PIRIYASIRIPHAN</span>
      {/* <span className="text-center text-3xl font-bold tracking-widest z-50 mt-7">BACK-END DEVELOPER</span> */}
      <div className="absolute bottom-0 flex justify-center">
      <img src="./prew.png" className="h-full w-[50%] opacity-90 z-10"/>
      </div>
      <div className="absolute  left-0 bottom-0 w-1/5 ml-16 mb-16">
      <span className="text-center text-xl font-extrabold tracking-widest z-50 mt-7">BACK-END DEVELOPER</span>
<br />
      <span>
      I would appreciate an experience in the back-end developer internship for six months and applying it in professional practice in the future.
      </span>
      </div>
    </div>
  )
}