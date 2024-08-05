const Background = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-gradient-to-b from-[#171D25] to-[#0D1013] -z-50 flex flex-col justify-center items-center  gap-4">
      <div className="absolute w-[346px] h-[346px] rounded-full border-primary border-[19px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl -z-40" />
      <div className="absolute w-[270px] h-[270px] rounded-full bg-primary -bottom-0 left-0 -translate-x-1/2 -translate-y-1/2 blur-2xl -z-40" />
      <div className="absolute w-[170px] h-[170px] rounded-full bg-primary top-48 -right-24 -translate-x-1/2 -translate-y-1/2 blur-2xl -z-40" />
    </div>
  );
};

export default Background;
