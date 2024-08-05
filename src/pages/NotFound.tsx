import { useNavigate } from "react-router-dom";
import Button from "../components/shared/Button";
import NotFoundIcon from "../img/404.png";
import { MouseEvent } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    navigate("/");
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img width={100} src={NotFoundIcon} alt="Not Found Icon" />
        <Button onClick={handleNavigate}>Return to Home</Button>
      </div>
    </div>
  );
};

export default NotFound;
