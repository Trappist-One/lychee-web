import Header from "./Header";
import Silder from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Content from "./Content";
import { createContext, useReducer, useEffect } from "react";

import { LayoutContext, State } from "./LayoutContext";

const C = createContext({});

export default function Layout() {

  return (
    <>
      <ConfigProvider>
        <div className="h-full flex flex-row">
          <Silder></Silder>
          <div className="flex flex-col w-full">
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            <Content>
            </Content>
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
