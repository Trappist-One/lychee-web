import { createBrowserRouter } from "react-router-dom";
// import Login from "./ui/pages/login/Login";
import { lazy } from "react";

const Login = lazy(() => import("./ui/pages/login/Login"))

const Layout = lazy(() => import("@/ui/layout/Layout"));
const Tab1 = lazy(() => import("./ui/pages/Tab1"));
const Tab2 = lazy(() => import("./ui/pages/Tab2"));
const Tab3 = lazy(() => import("./ui/pages/Tab3"));
const NoFound = lazy(() => import("./ui/pages/errors/NoFound"));


const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "*",
    element: <NoFound />,
  },
  {
    path: "/index",
    element: <Layout />,
    errorElement: <NoFound/>,
    children: [
      {
        path: 'tab1',
        element: <Tab1/>
      },
      {
        path: 'tab2',
        element: <Tab2/>
      },
      {
        path: 'tab3',
        element: <Tab3/>
      }
    ],
  }
];

const router = createBrowserRouter(routes);

export default router;
