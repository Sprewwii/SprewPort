import React from "react"
import Mail from "../logo/IonIosMail"
import Phone from "../logo/IonCall"
import GitHub from "../logo/MdiGithub"

function Footer() {
  return (
    <>
      <div className="bg-gray-700 flex flex-row justify-between items-center px-5 xl:px-16 text-pink-100 py-4">
        <div className="text-xs xl:text-base flex flex-row justify-center items-center gap-x-1 xl:gap-x-2">
          <Phone />
          <p>+6695 479 6673</p>
        </div>
        <div className="text-xs xl:text-base flex flex-row justify-center items-center gap-x-1 xl:gap-x-2">
          <Mail />
          <p>supicha.prew@gmail.com</p>
        </div>
        <div className="text-xs xl:text-base flex flex-row justify-center items-center gap-x-1 xl:gap-x-2">
          <GitHub />
          <p>Sprewwii</p>
        </div>
      </div>
    </>
  )
}

export default Footer
