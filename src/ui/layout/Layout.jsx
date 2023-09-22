import Header from "./Header";
import Silder from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Content from "./Content";
import { createContext, useEffect, useReducer, useState } from "react";
import { LayoutContext, State } from "./LayoutContext";
import Loading from "@/ui/components/loading/index";
import { getInfo } from "@/api/login";
import { setRoutes } from "@/stores/user";
import Tab1 from "@/ui/pages/Tab1";
import Tab2 from "@/ui/pages/Tab2";
import Tab3 from "@/ui/pages/Tab3";
import router from "../../config/router/router";
import { useSelector } from "react-redux";


const C = createContext({});

export default function Layout() {
  const [ready, setReady] = useState(false)
  const isLogin = useSelector(state => state.userStore.isLogin)
  console.log(isLogin);
  useEffect(() => {
    getInfo().then(res => {
      const routes = [{ path: '/tab1', element: <Tab1 /> }, { path: '/tab2', element: <Tab2 /> }, { path: '/tab3', element: <Tab3 /> }];
      // setRoutes(routes)
      console.log(router.routes[0].children);
      // console.log(routesStore);
      setReady(true)
    }
    ).catch(error => console.log(new Error(error)))

  }, []);

  return (!ready ? <Loading /> :
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
