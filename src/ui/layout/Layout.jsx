import Header from "./Header";
import Silder from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Content from "./Content";
import { createContext, useLayoutEffect, useReducer } from "react";
import { LayoutContext, State } from "./LayoutContext";
import { getInfo } from "@/api/login";
import router from "@/routes";
import { useLoaderData } from "react-router-dom";

const C = createContext({});

export default function Layout() {
  const data = useLoaderData()
  console.log(data);
  // const navigate = useNavigate();
  // useLayoutEffect(() => {
  //   const res = getInfo();
  //   console.log(res);
  // })

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
