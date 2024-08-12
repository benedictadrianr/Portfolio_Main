import Navbar from "../../components/Navbar";
import Content from "./Content";

const Home = () => {
  return (
    <div className="flex">
      <Navbar className="overflow-x-hidden overflow-y-auto" />
      <Content className="overflow-x-hidden overflow-y-auto w-full h-screen" />
    </div>
  );
};

export default Home;
