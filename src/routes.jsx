import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { getInfo } from "./api/login";

const Login = lazy(() => import("@/ui/pages/login/Login"));
const Layout = lazy(() => import("@/ui/layout/Layout"));
const Tab1 = lazy(() => import("@/ui/pages/Tab1"));
const Tab2 = lazy(() => import("@/ui/pages/Tab2"));
const Tab3 = lazy(() => import("@/ui/pages/Tab3"));
const NoFound = lazy(() => import("@/ui/pages/common/NoFound"));
const Error = lazy(() => import("@/ui/pages/common/Error"));

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NoFound />,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    loader: async () => {
      return getInfo();
    }
  },
];

const router = createBrowserRouter(routes);

export default router;
