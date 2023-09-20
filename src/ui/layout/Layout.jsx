import Header from "./Header";
import Silder from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Content from "./Content";
import { createContext, useEffect, useLayoutEffect, useReducer } from "react";
import { LayoutContext, State } from "./LayoutContext";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { getInfo } from "@/api/login";

const C = createContext({});

export default function Layout() {
  // const navigate = useNavigate();
  useLayoutEffect(() => {
    const res = getInfo();
  })
  // const { auth } = useAuth();
  // const location = useLocation();

  // useEffect(() => {
  //   console.log(auth);
  //   if (!auth.isLogin) {
  //     navigate("/");
  //   }
  // });

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
