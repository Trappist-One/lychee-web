import App from "./App";
import { Icon } from "@mui/material";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/",
    component: <App />,
  },
];

export default routes;
