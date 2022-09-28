import React, {useEffect, useState} from "react"
import { Link , useLocation} from "react-router-dom"


export default function Navbar() {
  const location = useLocation()

  return (
    <div>
      <nav className="px-2 sm:px-4 py-8 fixed w-full z-50 top-0 left-0 font-extrabold">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <span className="self-center text-xl font-semibold whitespace-nowrap">

            </span>
          <div className="flex md:order-2">

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-pink-500 rounded-lg md:hidden hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 rounded-lg border border-pink-100 md:flex-row md:space-x-24 md:mt-0 md:text-sm md:font-bold md:border-0">
              
              <Link to="/">
              <li>
                <a href="#"
                  className={`${location.pathname == '/' ? "text-pink-700" : "text-gray-700 hover:text-pink-300"} block py-2 pr-4 pl-3 rounded md:p-0`}
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
</Link>
<Link to="/projects">
              <li>
                <a
                  href="#"
                  className={`${location.pathname == '/projects' ? "text-pink-700" : "text-gray-700"} block py-2 pr-4 pl-3 rounded md:p-0 hover:text-pink-300`}
                >
                  PROJECTS
                </a>
              </li>
              </Link>
              <Link to ="/contact">
              <li>
                <a
                  href="#"
                  className={`${location.pathname == '/contact' ? "text-pink-700" : "text-gray-700"} block py-2 pr-4 pl-3 rounded md:p-0 hover:text-pink-300`}
                >
                  ABOUT ME
                </a>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
