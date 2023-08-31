import Header from "./Header";
import Silder from "./Sidebar";
import Breadcrumb from "./Breadcrumb";
import Content from "./Content";
import { createContext, useLayoutEffect, useReducer, useState } from "react";

import {LayoutContext, State} from "./LayoutContext";

const C = createContext({});

export default function Layout() {
  useLayoutEffect(()=> {
    let rootStyle = document.querySelector(':root')
    let css = getComputedStyle(rootStyle)
    // console.log('rootStyle -- ' + css.item());
  }, [])
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
  const[state, dispatch] = useReducer(State, LayoutContext)
  return (
    <C.Provider
      value={{
        state, 
        dispatch
      }}
    >
      {children}
    </C.Provider>
  );
};

export { C };
