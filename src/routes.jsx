import Layout from "@/ui/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Tab1 from "./ui/pages/Tab1";
import Tab2 from "./ui/pages/Tab2";
import Tab3 from "./ui/pages/Tab3";


const routes = [
  {
    path: "/",
    element: <Layout />,
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
];

const router = createBrowserRouter(routes);

export default router;
