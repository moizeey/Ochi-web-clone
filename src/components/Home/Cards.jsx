function Cards() {
  return (
    <div className="w-full h-screen flex gap-5 items-center justify-center px-10">
      <div className="w-1/2 h-[50vh] relative  ">
        <div className=" h-full rounded-xl bg-[#004D43] flex items-center justify-center">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <div className=" text-md absolute left-7 top-[85%] px-2 py-1 leading-none text-[#CDEA68] border-[#CDEA68] border-2 rounded-full">
            &copy;2019-2022
          </div>
        </div>
      </div>
      <div className="w-1/2 h-[50vh] rounded-xl flex gap-5  ">
        <div className=" relative w-1/2 rounded-xl bg-[#131f1d] flex items-center justify-center ">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
          <button className="text-sm absolute top-[85%] left-5 border-white border-2 px-3 uppercase rounded-full py-1 leading-1 hover:bg-white hover:text-[#004D43] ">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="relative w-1/2 bg-[#131f1d] rounded-xl flex items-center justify-center">
          <img
            className="w-20"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className=" text-sm absolute top-[85%] left-5 border-white border-2 px-3 uppercase rounded-full py-1 leading-1 hover:bg-white hover:text-[#004D43] ">
            Business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cards;
