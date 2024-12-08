import React from 'react'
import Link from 'next/link'
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


const Navbar

  = () => {
    return (
      <nav className="global-navbar mx-auto px-8 py-3 relative flex items-center justify-between">
        {/* Logo */}
        <div className="logo font-bold text-3xl">
          {/* <img src="/logo.png" alt="logo" className="w-48" /> */}
          <span>Termox</span>
        </div>
        <div className="header flex">

          {/* Nav Links */}
          <ul className="navLinks flex gap-6 bg-white px-4 py-2 font-medium text-lg">
            <li>
              <a href="#" className="text-gray-700 hover:text-black transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black transition">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-black transition">
                Book Online
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="navbutton flex">
            <RegisterLink><button className="signup-button bg-gray-200 border rounded-md px-4 py-2 hover:bg-gray-300 transition">
              Sign Up
            </button></RegisterLink>

            <LoginLink><button className="btnLogin-popup bg-transparent border rounded-md border-gray-300 px-4 py-2 ml-4 text-gray-600 hover:bg-gray-800 hover:text-white transition">
              Log In
            </button></LoginLink>

          </div>
        </div>
      </nav>
    )
  }

export default Navbar

