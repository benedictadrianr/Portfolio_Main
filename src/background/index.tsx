import Ellipse5 from "/Ellipse 5.png";
import Ellipse4 from "/Ellipse 4.png";

const Background = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-gradient-to-b from-[#171D25] to-[#0D1013] -z-50 flex flex-col justify-center items-center gap-4">
      {/* <div className="absolute w-[346px] h-[346px] rounded-full border-primary-500 border-[19px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl -z-40" /> */}
      <img
        src={Ellipse4}
        alt="ellipse4"
        className="fixed w-[1000px] -bottom-[250px] md:-bottom-[700px] lg:-bottom-[800px] left-[200px] md:left-[200px] lg:left-[500px] -translate-x-1/2 -translate-y-1/2 -z-40"
      />
      <img
        src={Ellipse5}
        alt="ellipse5"
        className="fixed w-[1000px] top-48 -right-[400px] md:-right-[700px] lg:-right-[700px] -translate-x-1/2 -translate-y-1/2 -z-40"
      />
      {/* <div className="absolute w-[270px] h-[270px] rounded-full bg-primary-500 -bottom-0 left-0 -translate-x-1/2 -translate-y-1/2 blur-2xl -z-40" />
      <div className="absolute w-[170px] h-[170px] rounded-full bg-primary-500 top-48 -right-24 -translate-x-1/2 -translate-y-1/2 blur-2xl -z-40" /> */}
    </div>
  );
};

export default Background;
