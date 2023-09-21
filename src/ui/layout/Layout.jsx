import Header from "./Header";
import Silder from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Content from "./Content";
import { createContext, useEffect, useReducer } from "react";
import { LayoutContext, State } from "./LayoutContext";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";
import router from "@/config/router/router";

const C = createContext({});

export default function Layout() {
  const dyRouter = [{path: '/tab1', element: <Tab1/>}, {path: '/tab2', element: <Tab2/>}, {path: '/tab3', element: <Tab3/>}];

  console.log(99999999999);
  useEffect(() => {
    console.log(router.routes[0]);
    router.routes[0].children = dyRouter
  });
  return (
    <>
      <ConfigProvider>
        <div className="h-full flex flex-row">
          <Silder></Silder>
          <div className="flex flex-col w-full">
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            <Content></Content>
          </div>
        </div>
      </ConfigProvider>
    </>
  );
}

const ConfigProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LayoutContext, State);
  return (
    <C.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </C.Provider>
  );
};

export { C };
