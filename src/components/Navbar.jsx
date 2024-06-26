import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()
  const [show, setShow] = useState("false")
  return (
    <div>
      <nav className="px-2 sm:px-4 py-4 fixed w-full z-50 top-0 left-0 font-extrabold sm:bg-pink-100 md:bg-pink-100 xl:bg-pink-100">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <span className="self-center text-xl font-semibold whitespace-nowrap"></span>

          <div className="md:order-2" onClick={() => setShow(!show)}>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-pink-500 md:hidden hover:bg-pink-100"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="#eb9a9a"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${show == true ? 'bg-pink-300 right-5 top-16 absolute text-right justify-between w-1/3 items-center z-50' : 'hidden'} xl:text-center lg:bg-transparent xl:w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 rounded-lg sm:mx-auto md:flex-row md:space-x-24 md:mt-0 md:text-sm md:font-bold md:border-0">
              <Link to="/">
                <li>
                  <div href="#" className={`${location.pathname == "/" ? "text-pink-700" : "text-gray-700 xl:hover:text-pink-300"} block py-2 pr-4 pl-3 rounded md:p-0`}
                    aria-current="page"> HOME </div>
                </li>
              </Link>
              <Link to="/projects">
                <li>
                  <div
                    href="#"
                    className={`${
                      location.pathname == "/projects"
                        ? "text-pink-700"
                        : "text-gray-700"
                    } block py-2 pr-4 pl-3 rounded md:p-0 xl:hover:text-pink-300`}
                  >
                    PROJECTS
                  </div>
                </li>
              </Link>
              {/* <Link to="/activities">
                <li>
                  <div
                    href="#"
                    className={`${
                      location.pathname == "/activities"
                        ? "text-pink-700"
                        : "text-gray-700"
                    } block py-2 pr-4 pl-3 rounded md:p-0 xl:hover:text-pink-300`}
                  >
                    ACTIVITIES
                  </div>
                </li>
              </Link> */}
              <Link to="/contact">
                <li>
                  <div
                    href="#"
                    className={`${
                      location.pathname == "/contact"
                        ? "text-pink-700"
                        : "text-gray-700"
                    } block py-2 pr-4 pl-3 rounded md:p-0 xl:hover:text-pink-300`}
                  >
                    SKILLS
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
