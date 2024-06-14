import { DiMongodb } from "react-icons/di";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

import DevImage from "../../assets/developer.avif";
const Home = () => {
    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            {/* <h1>Home </h1> */}
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                    <span className="text-xl">Thanks for your generosity.</span>
                    <div className="flex space-x-1 text-2xl md:text-4xl">
                    <h1 className="mt-4">Hello, I am a</h1>
                    <ReactTyped
                        className="text-red-700 font-bold mt-4"
                        strings={["Developer", "Programmer", "Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    />
                    </div>
                    <br />
                    <p className="text-sm md:text-lg text-justify">I am a results-driven Frontend Developer proficient in JavaScript, React, and Redux, with expertise in crafting responsive interfaces using Tailwind CSS.</p>
                    <br />
                    {/* Social Media icons */}
                    <div className="flex flex-col items-center md:flex-row justify-between  space-y-12 md:space-y-0">
                        <div className="">
                            <h1 className="mb-2 font-bold text-xl text-green-500">Social Media</h1>
                            <div className="flex space-x-6">
                                <a href="https://www.linkedin.com/in/vishnu-kumar-595a031b3/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-xl  cursor-pointer md:text-3xl hover:scale-150 duration-200 transition-all rounded-full border-[2px]" size={26}/>
                                </a>
                                <a href="https://twitter.com/vishnumeerut" target="_blank" rel="noopener noreferrer">
                                <FaSquareXTwitter className="text-xl cursor-pointer md:text-3xl hover:scale-150 duration-200 transition-all rounded-full border-[2px]" size={26} />
                                </a>
                                <a href="https://www.youtube.com/@codingguruji26" target="_blank" rel="noopener noreferrer">
                                <FaYoutube  className="text-xl  cursor-pointer md:text-3xl hover:scale-150 duration-200 transition-all rounded-full border-[2px]" size={26}/>
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <h1 className="mb-2 font-bold text-xl text-green-500">Working On</h1>
                            <div className="flex space-x-6">
                                <SiExpress className="text-xl cursor-pointer md:text-3xl hover:scale-150 duration-200 transition-all rounded-full border-[2px]"  size={26}/>
                                <DiMongodb  className="text-xl cursor-pointer md:text-3xl hover:scale-150 duration-200 transition-all rounded-full border-[2px]" size={26} />
                                <RiNextjsFill className="text-xl cursor-pointer md:text-3xl hover:scale-150 duration-200 transition-all rounded-full border-[2px]"  size={26}/>
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
    );
};

export default Home;