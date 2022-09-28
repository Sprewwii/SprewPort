import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import HomePage from "./components/HomePage"
import ProjectPage from "./components/ProjectPage"
import ContactPage from "./components/ContactPage"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/projects" element={<ProjectPage />}/>
        <Route exact path="/contact" element={<ContactPage />}/>
      </Routes>
    </Router>
  )
}

export default App
