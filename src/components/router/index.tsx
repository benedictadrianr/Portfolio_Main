import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NotFound from "../../pages/NotFound";
import App from "../../App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/Portfolio_Main" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
