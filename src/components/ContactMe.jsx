import React, { useState } from "react"
import { Link } from "react-router-dom"



export default function ContactMe(props) {
  return (
<div>
<div className="flex flex-col justify-center items-center border-2 border-black p-5  bg-white -translate-x-2 -translate-y-2 shadow-[8px_8px_0_0_#000]">
            <strong className=" p-3 bg-pink-300 border-2 rounded-full border-black -mt-12 text-gray-700" weight="4em" height="4em">
                <props.contact.logo />
            </strong>
            <p className="mt-2 text-gray-700">{props.contact.detail}</p>
        </div>

    </div>

  )}