import { Outlet } from "react-router";
import Background from "./background";

const App = () => {
  return (
    <main className="text-cyan-50 min-w-screen min-h-screen">
      <Background />
      <Outlet />
    </main>
  );
};

export default App;
