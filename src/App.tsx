import Background from "./background";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Project from "./pages/Project";

const App = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Profile />
      <Project />
      <Contact />
    </>
  );
};

export default App;
