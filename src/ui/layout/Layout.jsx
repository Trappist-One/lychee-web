import Header from "./Header";
import Silder from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Content from "./Content";
import { createContext, useState } from "react";

const C = createContext({});

export default function Layout() {
  return (
    <>
      <ConfigProvider>
        <div className="bg-gray-100 h-full flex flex-row">
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
  const [expand, setExpand] = useState(true);
  const [activeMenuId, setActiveMenuId] = useState(0);
  const [tabs, setTabs] = useState([
    {
      name: "首页",
      path: "/",
      id: 0,
    },
  ]);
  return (
    <C.Provider
      value={{
        expand,
        setExpand,
        tabs,
        setTabs,
        activeMenuId,
        setActiveMenuId,
      }}
    >
      {children}
    </C.Provider>
  );
};

export { C };
