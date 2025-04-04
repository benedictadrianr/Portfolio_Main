import { Outlet } from "react-router";
import Background from "./background";
import FollowCursor from "./shared/components/FollowCursor";

const App = () => {
  return (
    <main className="text-cyan-50">
      <Background />
      <FollowCursor />
      <Outlet />
    </main>
  );
};

export default App;
