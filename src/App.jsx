import LocomotiveScroll from "locomotive-scroll";

import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full overflow-hidden  bg-zinc-900 text-white ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
