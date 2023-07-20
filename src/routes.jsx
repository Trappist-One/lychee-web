import Layout from '@/ui/layout/Layout'
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <Layout />
      },
];

const router = createBrowserRouter(routes)

export default router;
