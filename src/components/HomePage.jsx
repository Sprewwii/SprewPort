import React from 'react';
import Navbar from "./Navbar.jsx"
import Home from "./Home.jsx"
import ButtonResume from "./ButtonResume.jsx"

export default function HomePage() {
    return (
        <div>
          <ButtonResume />
          <Home />
        </div>
    )
}