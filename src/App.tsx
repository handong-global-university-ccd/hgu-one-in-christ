import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATHS } from "./constants/paths";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Works from "./pages/Works";
import Designers from "./pages/Designers";
import Designer from "./pages/Designer";
import Work from "./pages/Work";

const routeList = [
  {
    path: PATHS.HOME,
    element: <Home />,
  },
  {
    path: PATHS.WORKS,
    element: <Works />,
  },
  {
    path: PATHS.WORKS_DETAIL,
    element: <Work />,
  },
  {
    path: PATHS.DESIGNERS,
    element: <Designers />,
  },
  {
    path: PATHS.DESIGNER_DETAIL,
    element: <Designer />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
    };
  })
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
