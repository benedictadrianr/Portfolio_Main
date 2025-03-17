import { NavbarProps } from "../../utils/data/navbarData";

const RouteItem = ({
  data,
  selected,
}: {
  data: NavbarProps;
  selected: string;
}) => {
  return (
    <>
      <a
        title={data.name}
        href={`#${data.name.toLocaleLowerCase()}`}
        className={`${
          selected === data.name.toLocaleLowerCase()
            ? "bg-white/10 border-r-4"
            : ""
        } transition-all ease-in-out duration-300 hover:text-primary-500 w-full flex justify-center border-r-primary-500`}>
        <div className="rotate-90 my-10">{data.name}</div>
      </a>
    </>
  );
};

export default RouteItem;
