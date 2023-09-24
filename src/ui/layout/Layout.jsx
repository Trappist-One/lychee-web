import Header from "./Header";
import Silder from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Content from "./Content";
import { createContext, useEffect, useReducer, useState } from "react";
import { LayoutContext, State } from "./LayoutContext";
import Loading from "@/ui/components/loading/index";
import { getInfo } from "@/api/login";
import { useDispatch } from "react-redux";
import { setMenus, setRoles, setUser, setPerms, setRoutes } from "@/config/stores/user";
import { parseRoutes } from "@/utils/parseInfo";
import router from "@/config/router/router";

const C = createContext({});

export default function Layout() {
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    getInfo()
      .then((res) => {
        dispatchInfo(res.data);
        setReady(true);
      })
      .catch((error) => console.log(new Error(error)));
  }, []);

  const dispatchInfo = (data) => {
    dispatch(setMenus(data.menus));
    dispatch(setRoles(data.roles));
    dispatch(setUser(data.user));
    dispatch(setPerms(data.permissions));
    // dispatch(setRoutes(parseRoutes(data.menus)))
    router.routes[0].children = parseRoutes(data.menus, data.menus)
    console.log(router.routes[0].children);
  };

  return !ready ? (
    <Loading />
  ) : (
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
