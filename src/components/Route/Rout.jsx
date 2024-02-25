import About from "../Home/About";
import Cards from "../Home/Cards";
import Eyes from "../Home/Eyes";
import Featured from "../Home/Featured";
import LandingPage from "../Home/LandingPage";
import Marqee from "../Home/Marqee";

function Rout() {
  return (
    <div>
      <LandingPage />
      <Marqee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
    </div>
  );
}
export default Rout;
