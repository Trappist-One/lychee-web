import Layout from "@/ui/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Tab1 from "./ui/pages/Tab1";
import Tab2 from "./ui/pages/Tab2";
import Tab3 from "./ui/pages/Tab3";
import Error404 from "./ui/pages/errors/404";
import Login from "./ui/pages/login/Login";


const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404/>,
    children: [
      {
        path: '/tab1',
        element: <Tab1></Tab1>
      },
      {
        path: '/tab2',
        element: <Tab2></Tab2>
      },
      {
        path: '/tab3',
        element: <Tab3></Tab3>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  }
];

const router = createBrowserRouter(routes);

export default router;
