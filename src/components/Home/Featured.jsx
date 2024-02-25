import { motion } from "framer-motion";
import { useState } from "react";

function Featured() {
  const [isHovering, setHovering] = useState(false);
  const [isHovering1, setHovering1] = useState(false);
  return (
    <div className="w-full pt-10  ">
      <div className="pl-10">
        <h1 className="text-white text-5xl">Feautured projects</h1>
      </div>
      <div className="w-full border-b-2 border-zinc-700 pt-5 pb-10"></div>

      <div className="px-20 pt-10 pb-20">
        <div className="cards w-full flex gap-10 relative ">
          <div
            className="cardcontainer w-1/2 h-[70vh] "
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <h1 className="absolute z-[9] font-semibold overflow-hidden text-8xl top-1/2 left-1/2 text-[#CDEA68] -translate-x-[50%] -translate-y-[50%] ">
              {"Fyde".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "-15%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" w-full h-[70vh] overflow-hidden  ">
              <img
                className="w-full h-[70vh] bg-cover cursor-pointer rounded-xl "
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </div>
          </div>
          <div
            className="cardcontainer w-1/2 h-[70vh]"
            onMouseEnter={() => setHovering1(true)}
            onMouseLeave={() => setHovering1(false)}
          >
            <h1 className="absolute z-[9] font-semibold overflow-hidden text-8xl top-1/2 left-1/2 text-[#CDEA68] -translate-x-[50%] -translate-y-[50%] ">
              {"Trava".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering1 ? { y: "-15%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" w-full h-[70vh] overflow-hidden  ">
              <img
                className="w-full h-[70vh] bg-cover cursor-pointer rounded-xl "
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Featured;
