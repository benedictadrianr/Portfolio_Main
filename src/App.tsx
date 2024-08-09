import { Outlet } from "react-router";
import Background from "./background";

const App = () => {
  return (
    <main className="text-cyan-50">
      <Background />
      <Outlet />
    </main>
  );
};

export default App;
