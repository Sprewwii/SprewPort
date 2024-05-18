import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import HomePage from "./components/HomePage"
import ProjectPage from "./components/ProjectPage"
import ContactPage from "./components/ContactPage"
import ActivityPage from "./components/ActivityPage"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="">
 <Router>
      <Navbar />
      <Routes>
        
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/projects" element={<ProjectPage />}/>
        <Route exact path="/activities" element={<ActivityPage />}/>
        <Route exact path="/contact" element={<ContactPage />}/>
      </Routes>
    </Router>
          <div className="z-20 bottom-0 w-full fixed">
          <Footer />
          </div>
    </div>
  )
}

export default App
