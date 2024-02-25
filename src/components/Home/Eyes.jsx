import { useState } from "react";
import { useEffect } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(angle);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden  ">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.5"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="   absolute top-1/3 left-1/2  flex gap-10 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[12vw] h-[12vw] bg-white flex justify-center items-center rounded-full">
            <div className="relative rounded-full  bg-zinc-900   w-2/3 h-2/3">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate - 180}deg)`,
                }}
                className="line absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]  w-full h-5  "
              >
                <div className=" w-5 h-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[12vw] h-[12vw] bg-white rounded-full flex justify-center items-center">
            <div className=" relative rounded-full bg-zinc-900 w-2/3 h-2/3">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate - 360}deg)`,
                }}
                className="line absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]  w-full h-5  "
              >
                <div className=" w-5 h-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Eyes;
