import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function ButtonResume() {

const [isHover, setIsHover] = useState("false")


  return (
<Link
  class="absolute right-0 bottom-0 mb-16 mr-16 inline-block group focus:outline-none focus:ring z-50 "
  to="./Resume_Supicha_KMUTT.pdf" download target="_blank"
>
  <span
    class="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-pink-300 group-hover:translate-y-1.5 group-hover:translate-x-1.5"
  ></span>

  <span class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current">
    Download Resume
  </span>
</Link>
  )
}