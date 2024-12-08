import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#00093c] to-[#2d0b00] w-full rounded-tl-[125px] text-white">
      {/* Row */}
      <div className="w-[80%] mx-auto flex flex-wrap items-start justify-between text-[1.1vw]">
        {/* Column 1 */}
        <div className="flex flex-col gap-1 basis-[16%] p-[65px_29px_44px_29px]">
          <h3 className="w-fit mb-2">Groom Easy</h3>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-1 basis-[16%] p-[65px_29px_44px_29px]">
          <h3 className="w-fit mb-2">Office</h3>
          <p>Port Blair Line</p>
          <p>Barrackpore, 700120</p>
          <p>West Bengal, India</p>
          <p className="email-id w-fit border-b border-gray-300 my-2 pb-0">
            groomeasy@gmail.com
          </p>
          <h3>+91-1234567891</h3>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-1 basis-[16%] p-[65px_29px_44px_29px]">
          <h3 className="w-fit mb-2">Links</h3>
          <ul className="flex flex-col gap-2 list-none">
            <li>
              <a
                href="#"
                className="text-[rgba(255,255,255,0.868)] no-underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[rgba(255,255,255,0.868)] no-underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[rgba(255,255,255,0.868)] no-underline"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[rgba(255,255,255,0.868)] no-underline"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[rgba(255,255,255,0.868)] no-underline"
              >
                Book Online
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-1 basis-[16%] p-[65px_29px_44px_29px]">
          <h3 className="w-fit mb-2">Newsletter</h3>
          <form className="flex items-center justify-between border-b border-gray-300 pb-2 gap-1">
            <input
              type="email"
              placeholder="Enter your email id"
              className="w-full bg-transparent text-gray-300 border-none outline-none"
              required
            />
            <button className="bg-transparent border-none outline-none cursor-pointer">
            </button>
          </form>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="flex justify-center items-center pt-[15vh] pb-[3vh]">
        <div className="w-[39%] border border-black mr-5 opacity-50"></div>

        <div className="w-[40%] border border-black ml-5 opacity-50"></div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center pb-[10vh] gap-5">

      </div>
      <div className='text-white flex items-center justify-center px-4 h-16'>
        <p>Copyright &copy; Tamrox - All rights reserved!</p>
      </div>
    </footer>
  )
}

export default Footer