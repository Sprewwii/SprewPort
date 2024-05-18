import React, { useState } from "react"
import { Link } from "react-router-dom"
import IconDownload from "../logo/IconDownload"

export default function ButtonResume() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 z-40 mb-5 xl:mb-16 sm:left-auto sm:transform-none sm:translate-x-0 sm:mr-16 sm:right-0 bottom-10">
      <a
        className="relative block group z-50"
        href="https://drive.google.com/drive/folders/1KXOveDqu4arB4TzAGzK7ZB6xzjoMX29-?usp=sharing"
        target="_blank"
      >
        <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-pink-300 group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

        <span className="flex text-gray-700 flex-row gap-x-1 justify-center items-center relative inline-block px-8 py-3 text-sm lg:text-base font-bold tracking-widest border-2 border-gray-700">
          CV & Transcript
        </span>
      </a>
    </div>
  )
}
