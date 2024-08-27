import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Works from "./pages/Works";
import Designers from "./pages/Designers";
import { PATHS } from "./constants/paths";

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
    path: PATHS.DESIGNERS,
    element: <Designers />,
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
