import { useContext, useState } from "react";
import { C } from "./Layout";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { parseParentPath } from "@/utils/parseInfo";

export default function Silder() {
  const { state, dispatch } = useContext(C);

  const menus = useSelector((state) => state.userStore.menus);

  const width = state.expand ? " w-[180px]" : " w-[90px]";
  return (
    <div className={"h-full shadow-md flex flex-col" + width}>
      <div className="h-10">
        <img
          className="h-10 w-8 m-auto"
          src="../src/assets/icons/logo.svg"
        ></img>
      </div>
      <div className=" w-4/5 h-[2px] bg-ly-primary mx-auto"></div>
      <MenuList
        dataList={menus}
        showSub={state.expand}
        tabs={state.tabs}
      ></MenuList>
    </div>
  );
}

const MenuList = (prop) => {
  const { state, dispatch } = useContext(C);

  const dataList = prop.dataList;
  const [curMenu, setCurMenu] = useState(dataList[0]);

  const checkMenuFun = (menuId) => {
    dispatch({ type: "setExpand", val: true });
    setCurMenu(dataList.filter((menuData) => menuData.id == menuId)[0]);
  };

  return (
    <div className="w-[180px] flex h-full text-xs">
      {/* 主菜单 */}
      <div className="w-[90px] flex flex-col shadow-lg ">
        <ul>
          {dataList.map((menuData) => {
            return (
              <li
                key={menuData.id}
                className="px-4 py-2 cursor-pointer"
                onClick={() => checkMenuFun(menuData.id)}
              >
                {menuData.name}
              </li>
            );
          })}
        </ul>
      </div>
      {/* 子菜单 */}
      <div
        className={
          "w-[90px] flex flex-col h-full overflow-auto" +
          (state.expand ? "" : " hidden")
        }
      >
        <ul>
          {curMenu.children?.map((menu) => {
            return (
              <SubMenu
                menu={menu}
                key={"menu" + menu.id}
                parentPath={curMenu.path}
              ></SubMenu>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const SubMenu = (props) => {
  const isTitle = props.menu.component == null;
  const { state, dispatch } = useContext(C);

  const menus = useSelector((state) => state.userStore.menus);

  const navigate = useNavigate();

  const clickSubMenu = (menuData) => {
    const exist = Array.from(menus).some((tab) => tab.id == menuData.id);
    if (!exist) {
      let newTabs = [...state.tabs, menuData];
      dispatch({ type: "setTabs", val: newTabs });
    }
    dispatch({ type: "setActiveMenuId", val: menuData.id });
    const path = parseParentPath(menuData, menus, menuData.path)
    navigate(path);
  };

  return isTitle ? (
    <>
      <li key={props.menu.id} className="px-4 py-2 text-ly-accent">
        {props.menu.name}
      </li>
      {props.menu.children.map((menu) => {
        return <SubMenu menu={menu} key={"menu" + menu.id}></SubMenu>;
      })}
    </>
  ) : (
    <>
      <li
        key={props.menu.id}
        className="px-4 py-2 cursor-pointer"
        onClick={() => {
          clickSubMenu(props.menu);
        }}
      >
        {props.menu.name}
      </li>
    </>
  );
};
