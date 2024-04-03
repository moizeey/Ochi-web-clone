function About() {
  return (
    <div className="w-full bg-[#CDEA68]  text-black">
      <div className="pt-24  pl-4 pr-10 pb-10">
        <p className="font-['Neue_Montreal'] font-normal text-2xl">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </p>
      </div>
      <div className="border-t-2 border-slate-300 pb-4"></div>

      <div className="w-full pb-4">
        <div className="ml-4">
          <p>What you can expect:</p>
        </div>
        <div className="mt-6 ml-4 pb-4  text-black  flex  gap-4 justify-between w-[80vw]  font-['Neue_Montreal']">
          <p className="">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="border-t-2 border-slate-300 pb-4"></div>
        <div className=" pl-4">
          <h1 className="font-semibold">S:</h1>
          {["Instagram", "Linkedin", "Github", "Facebook"].map(
            (item, index) => {
              return (
                <div key={index}>
                  <a> {item}</a>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="border-t-2 border-slate-300 pb-4"></div>

      <div className="w-full pb-12 pt-4 font-['Neue_Montreal'] flex flex-wrap ">
        <div className="pl-4">
          <div className="flex gap-4 justify-center items-center pb-4 flex-col">
            <h1 className="pb-4 text-3xl ">Our approach:</h1>
            <div>
              <button className="text-white bg-black gap-8 px-[4vw] py-4 text-lg rounded-full flex items-center">
                Read more
                <div className="bg-white rounded-full w-2 h-2"></div>
              </button>
            </div>
          </div>
        </div>
        <div className=" px-4 ">
          <img
            className="rounded-md bg-gray-300 h-[70vw] "
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="ochi image"
          />
        </div>
      </div>
    </div>
  );
}
export default About;
