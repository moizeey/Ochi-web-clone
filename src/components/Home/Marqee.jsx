import { motion } from "framer-motion";

function Marqee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full pt-16 pb-32 bg-[#004D43] whitespace-nowrap rounded-tl-3xl rounded-tr-3xl "
    >
      <div className="border-t-2 border-b-2 border-zinc-300 uppercase flex pr-20 -mb-[5vw]  ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[17.5vw] leading-none font-semibold tracking-tighter pr-20 "
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[17.5vw] leading-none font-semibold tracking-tighter pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}
export default Marqee;
