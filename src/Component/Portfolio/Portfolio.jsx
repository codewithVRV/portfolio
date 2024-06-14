import { Link } from "react-router-dom"

import img1 from "../../assets/p1.jpg"
import img2 from "../../assets/p2.jpg"
import img3 from "../../assets/p3.webp"
import img4 from "../../assets/p4.jpg"
import img5 from "../../assets/p5.png"
import img6 from "../../assets/p6.png"


const Portfolio = () => {
    const cardItem = [
        {
          id: 1,
          logo: img1,
          name: "E-Commerece App",
          link: "https://vishnu-shop-karo.netlify.app/",
          code: "https://github.com/codewithVRV/second_shoppingCart",
          type: "Full stack App",
        },
        {
          id: 2,
          logo: img2,
          name: "CRM App",
          link: "https://vishnucrm.netlify.app/login",
          code: "https://github.com/codewithVRV/second_crm_app",
          type: "Full stack App",
        },
        {
          id: 3,
          logo: img3,
          name: "Crypto Currency",
          link: "https://vishnu-crypto-verse.netlify.app/",
          code: "https://github.com/codewithVRV/crypto_verse",
          type: "Api Based App",
        },
        {
          id: 4,
          logo: img4,
          name: "Movie Searching App",
          link: "https://monumental-custard-88bb5f.netlify.app/",
          code: "https://github.com/codewithVRV/movie-search-app",
          type: "Api Based App",
        },
        {
          id: 5,
          logo: img5,
          name: "Password Manager",
          link: "https://vishnu-password-manager.netlify.app/",
          code: "https://github.com/codewithVRV/password_manager",
          type: "Protect your password ",
        },
        {
          id: 6,
          logo: img6,
          name: "Pokedex",
          link: "https://inspiring-gumdrop-92706b.netlify.app/",
          code: "https://github.com/codewithVRV/pokemon",
          type: "Api Based App",
        },
      ];
      return (
        <div
          name="Portfolio"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
        >
          <hr />
          <div>
            <h1 className="text-5xl font-semibold  mb-15 mt-10 text-center">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-12 gap-3 my-5">
              {cardItem.map(({ id, logo, name, link, code, type }) => (
                <div
                  className="md:w-[270px] md:h-[280px] mb-6 border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                  key={id}
                >
                  <img
                    src={logo}
                    className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                    alt="name"
                  />
                  <div>
                    <div className="px-2 font-bold text-xl mb-2">{name}</div>
                    <p className="px-2 text-gray-700">
                      {type}
                    </p>
                  </div>
                  <div className=" px-4 py-2 space-x-2 mt-3 justify-around">
                    <a href={link} target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                      Demo
                    </a>
                    <a href={code} target="_blank"  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                      Source code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Portfolio;