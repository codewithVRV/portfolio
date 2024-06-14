import { DiMongodb } from "react-icons/di";
import { FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

import DevImage from "../../assets/developer.avif"
const Home = () => {
    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            {/* <h1>Home </h1> */}
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                    <span className="text-xl">Welcome In My Feed</span>
                    <div className="flex space-x-1 text-2xl md:text-4xl">
                    <h1>Hello, I am a</h1>
                    <ReactTyped
                        className="text-red-700 font-bold"
                        strings={["Developer", "Programmer", "Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    />
                    </div>
                    <br />
                    <p className="text-sm md:text-lg text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nihil asperiores officia eaque necessitatibus nisi doloremque soluta exercitationem esse mollitia totam culpa dolorem deleniti, quaerat velit ipsa itaque aut molestiae sint distinctio, voluptas cumque! Recusandae, aliquid quibusdam perspiciatis perferendis error beatae rerum alias totam minima esse odio magnam accusantium blanditiis.</p>
                    <br />
                    {/* Social Media icons */}
                    <div className="flex flex-col items-center md:flex-row justify-between  space-y-6 md:space-y-0">
                    <div>
                        <h1 className="mb-2 font-bold text-xl">Avaialbe On</h1>
                        <div className="flex space-x-6">
                            <FaLinkedin className="text-xl cursor-pointer md:text-3xl hover:scale-125 duration-200 transition-all rounded-full border-[2px]" size={26}/>
                            <FaSquareXTwitter className="text-xl cursor-pointer md:text-3xl hover:scale-125 duration-200 transition-all rounded-full border-[2px]" size={26} />
                            <FaYoutube  className="text-xl  cursor-pointer md:text-3xl hover:scale-125 duration-200 transition-all rounded-full border-[2px]" size={26}/>
                            <FaTelegram className="text-xl cursor-pointer md:text-3xl hover:scale-125 duration-200 transition-all rounded-full border-[2px]" size={26} />
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-2 font-bold text-xl">Working On</h1>
                        <div className="flex space-x-6">
                            <SiExpress className="text-xl cursor-pointer md:text-3xl hover:scale-125 duration-200 transition-all rounded-full border-[2px]"  size={26}/>
                            <DiMongodb  className="text-xl cursor-pointer md:text-3xl hover:scale-125 duration-200 transition-all rounded-full border-[2px]" size={26} />
                            <RiNextjsFill className="text-xl cursor-pointer md:text-3xl hover:scale-125 duration-200 transition-all rounded-full border-[2px]"  size={26}/>
                            <FaTelegram  size={26} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:ml-48 md:mt-20 order-1">

                    <img className="rounded-full md:w-[450px] md:h-[450px]" src={DevImage} alt="Developer image" />
                </div>
            </div>
        </div>
            <hr />
        </>
    )
}

export default Home;