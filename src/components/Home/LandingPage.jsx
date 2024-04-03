import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
// import LocomotiveScroll from "locomotive-scroll";
const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.5"
      className=" bg-zinc-900 pt-[1vw]  font-['Founders Grotesk X-Condensed']"
    >
      <div className="textstructure mt-[5vw] pl-[5vw]">
        {["We Create", "Eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker   ">
              <div className="w-fit flex flex-wrap items-end overflow-hidden ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" mr-[1vw]  h-[4.5vw] w-[7vw] rounded-md relative -top-[0.3vw]"
                  >
                    {" "}
                    <img
                      className="w-full rounded-lg"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />{" "}
                  </motion.div>
                )}

                <h1
                  key={index}
                  className="text-[6vw]   uppercase leading-[6vw] tracking-tight font-bold"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px]  border-zinc-700 mt-10 flex flex-wrap gap-6 justify-between items-start py-6 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md  text-wrap tracking-tight font-light leading-none ">
            {item}
          </p>
        ))}
        <div className="start flex justify-center items-center gap-3 ">
          <div className="border-[1px] border-zinc-500 px-4 py-1 rounded-full uppercase cursor-pointer tracking-widest hover:bg-white hover:text-black">
            Start the project
          </div>
          <div className="rounded-full border-[1px] border-zinc-500 w-10 h-10 flex cursor-pointer justify-center items-center hover:bg-white hover:text-black ">
            <span className="rotate-[45deg]  ">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
