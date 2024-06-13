

import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

import Profile from "../../assets/pic.webp"
const Navbar = () => {

    const [menu, setMenu] = useState(true)

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
    ]
    return (
        <>
            {/* nav bar */}
            <nav className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md sticky top-0">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex space-x-2">
                                <img  className="h-12 w-12 rounded-full" src={Profile} alt="profile pic" />
                                <h1 className="font-semibold text-xl cursor-pointer">Vishn 
                                    <span className="text-green-500 text-2xl">u</span>
                                    <p className="text-sm">Web Developer</p>
                                </h1>
                            </div>
                            {/* Desktop Navbar */}
                            <div>
                            <ul className=" hidden md:flex space-x-8">
                                {
                                    navItems.map((item) => <li  className="hover:scale-110 duration-200 transition-all cursor-pointer" key={item.id}>{item.text}</li>)
                                }
                            </ul>
                            <div onClick={() => setMenu(!menu)} className="md:hidden">
                            {
                                (menu) ? <IoMdMenu size={24} /> :
                                <IoMdClose size={24} />
                            }
                              
                            </div>
                        </div>
                    </div>
                        {/* Mobile Navbar */}
                {
                    !menu && (
                        <div>
                        <ul className=" md:hidden flex flex-col h-screen items-center justify-center gap-4 font-bold">
                        {
                            navItems.map((item) => <li className="hover:scale-110 duration-200 transition-all cursor-pointer" key={item.id}>{item.text}</li>)
                        }
                        </ul>
                    </div>
                    )
                }

            </nav>
        </>
    )
}

export default Navbar;