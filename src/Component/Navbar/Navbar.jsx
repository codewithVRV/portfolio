

import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";

import Profile from "../../assets/vishnu.webp";
const Navbar = () => {

    const [menu, setMenu] = useState(true);

    const navItems = [
        {
            id: 1,
            text: "Home",
        },
        {
            id: 1,
            text: "About",
        },
        {
            id: 1,
            text: "Portfolio",
        },
        {
            id: 1,
            text: "Experience",
        },
        {
            id: 1,
            text: "Contact",
        },
    ];
    return (
        <>
          <div className="max-w-screen-2xl container mx-auto px-3 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
            <div className="flex justify-between items-center h-16">
              <div className=" flex space-x-2">
                <img src={Profile} className="h-12 w-12 rounded-full" alt="" />
                <h1 className=" text-2xl cursor-pointer">
                  Vishn<span className="text-green-500 text-2xl">u</span>
                  <p className="text-sm">Web Developer</p>
                </h1>
              </div>
              {/* desktop navbar */}
              <div>
                <ul className="hidden md:flex space-x-8">
                  {navItems.map(({ id, text }) => (
                    <li
                      className="hover:scale-105 font-semibold hover:bg-gray-300 py-2 px-4 rounded-lg duration-200 cursor-pointer"
                      key={id}
                    >
                      <Link
                        to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div onClick={() => setMenu(!menu)} className="md:hidden">
                  {menu ? <IoMdMenu size={24} /> : <IoMdClose size={24} />}
                </div>
              </div>
            </div>
            {/* mobile navbar */}
            {menu && (
              <div className="bg-white">
                <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
                  {navItems.map(({ id, text }) => (
                    <li
                      className="hover:scale-105 duration-200 font-semibold hover:bg-gray-300 py-2 px-4 rounded-lg cursor-pointer"
                      key={id}
                    >
                      <Link
                        onClick={() => setMenu(!menu)}
                        to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      );
};

export default Navbar;