import React from 'react';
import Navbar from "./Navbar.jsx"
import Home from "./Home.jsx"
import ButtonResume from "./ButtonResume.jsx"

export default function HomePage() {
    return (
        <div className="w-full">
          <Home />
          {/* <div className="w-full bg-red-500"> */}
          <ButtonResume />
          {/* </div> */}
        </div>
    )
}