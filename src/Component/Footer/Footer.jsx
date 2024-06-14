import {  FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <>
          <hr />
          <footer className="py-12">
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
              <div className=" flex flex-col items-center justify-center">
                <div className="flex space-x-4">
                  <a href="https://twitter.com/vishnumeerut" target="_blank" rel="noopener noreferrer">
                  <FaSquareXTwitter size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/vishnu-kumar-595a031b3/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn size={24} />
                  </a>
                  <a href="https://github.com/codewithVRV" target="_blank" rel="noopener noreferrer">
                  <FaGithub  size={24} />
                  </a>
                  
                  
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                  <p className="text-sm">
                    &copy; 2024 Your Company. All rights reserved.
                  </p>
                  <p className="text-sm">Supportive Partner ❤️ Vishnu</p>
                </div>
              </div>
            </div>
          </footer>
        </>
      );
};

export default Footer;