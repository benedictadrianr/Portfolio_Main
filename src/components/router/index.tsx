import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../../App";
import NotFound from "../../pages/NotFound";
import Home from "../../pages/Home";
import Experience from "../../pages/Home/Experience";
import DetailedExperience from "../../pages/Home/Experience/DetailedExperience";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Portfolio_Main" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/Portfolio_Main/experience" element={<Experience />} />
      <Route
        path="/Portfolio_Main/experience/:expId"
        element={<DetailedExperience />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
