import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../../App";
import NotFound from "../../pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/Portfolio_Main" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
