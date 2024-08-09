import Profile from "./Profile";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
