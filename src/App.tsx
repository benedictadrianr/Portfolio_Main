import Background from "./background";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Experience from "./pages/Experience";

const App = () => {
  return (
    <main className="text-cyan-50">
      <Background />
      <Navbar />
      <Profile />
      <Experience />
      <Project />
      <Contact />
    </main>
  );
};

export default App;
