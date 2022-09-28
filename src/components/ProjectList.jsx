import React, {useEffect, useState} from "react"
import { Link , useLocation} from "react-router-dom"


export default function ProjectList(props) {

  return (
    <div>
    {/* <a href="#" class="relative block bg-black group">
  <img
    alt="Developer"
    src={props.project.img}
    class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-50 group-hover:opacity-50 "
  />

  <div class="relative p-8">
    <p class="text-sm font-medium tracking-widest text-pink-300 uppercase">
      {props.project.position}
    </p>

    <p class="text-2xl font-bold text-white">{props.project.nameProject}</p>

    <div class="mt-64">
      <div
        class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
      >
        <p class="text-sm text-white">
        {props.project.descrption}
        </p>
      </div>
    </div>
  </div>
</a> */}

<a href={props.project.link} class="relative block group h-96">
  <span class="absolute inset-0 border-2 border-black border-dashed"></span>

  <div
    class="p-8 relative flex flex-col items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    {/* <img src={props.project.img} className="absolute object-contain w-full mb-10"/> */}
    <div className={`w-full h-full group-hover:opacity-0 group-hover:absolute bg-cover`} style={{backgroundImage: `url(${props.project.img})`}}>
    </div>
    <div
      class="transition-opacity group-hover:opacity-0 group-hover:absolute"
    >
    

      <h2 class="mt-4 text-2xl font-medium">{props.project.nameProject}</h2>
      <p class="mt-4">
      {props.project.descrption}
      </p>
    </div>

    <div
      class="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative"
    >
      <h2 class="mt-4 text-2xl font-medium">{props.project.nameProject}</h2>

    

      <Link class="mt-8 font-bold" to={props.project.link}></Link>
    </div>
  </div>
</a>

</div>

  )
}