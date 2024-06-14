import skill1 from "../../assets/t1.webp";
import skill2 from "../../assets/t2.png";
import skill3 from "../../assets/t3.svg";
import skill4 from "../../assets/t4.webp";
import skill5 from "../../assets/t5.webp";
import skill6 from "../../assets/t6.svg";
import skill7 from "../../assets/t7.png";
import skill8 from "../../assets/t8.png";
import skill9 from "../../assets/t9.png";

const Experience = () => {
    const cardItem = [
        {
          id: 1,
          logo: skill1,
          name: "JavaScript",
        },
        {
          id: 2,
          logo: skill2,
          name: "React",
        },
        {
          id: 3,
          logo: skill3,
          name: "Redux",
        },
        {
          id: 4,
          logo: skill4,
          name: "HTML",
        },
        {
          id: 5,
          logo: skill5,
          name: "CSS",
        },
        {
          id: 6,
          logo: skill6,
          name: "MongoDB",
        },
        {
          id: 7,
          logo: skill7,
          name: "ExpressJs",
        },
        {
          id: 8,
          logo: skill8,
          name: "Tailwind",
        },
        {
          id: 9,
          logo: skill9,
          name: "Bootstrap",
        },
      ];
      return (
        <div
          name="Experience"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
        >
          <hr />
          <div>
            <h1 className="text-5xl text-center font-semibold mb-4 mt-8">Experties</h1>
            <p className="text-center mb-12 text-2xl text-green-700 font-semibold">
              I have more than 1 years of Hands-On experiance in below technologies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
              {cardItem.map(({ id, logo, name }) => (
                <div
                  className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                  key={id}
                >
                  <img src={logo} className="w-[150px] rounded-full" alt="" />
                  <div>
                    <div className="">{name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default Experience;