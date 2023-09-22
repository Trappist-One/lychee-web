import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Login = lazy(() => import("@/ui/pages/login/Login"));
const Layout = lazy(() => import("@/ui/layout/Layout"));
const NoFound = lazy(() => import("@/ui/pages/common/NoFound"));
const Error = lazy(() => import("@/ui/pages/common/Error"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NoFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;
