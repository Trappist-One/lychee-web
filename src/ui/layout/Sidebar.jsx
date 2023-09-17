import { useContext, useState } from "react";
import { menuDataList } from "./data";
import { C } from "./Layout";
import { useNavigate } from "react-router";
import { getCodeImg } from "@/api/login";


export default function Silder() {
  const { state, dispatch} = useContext(C);

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
        dataList={menuDataList}
        showSub={state.expand}
        tabs={state.tabs}
      ></MenuList>
    </div>
  );
}

const MenuList = (prop) => {
  const [captchaCode, setCaptchaCode] = useState(false)


  const getCaptchaCode = async () => {
    await getCodeImg().then((res) => {
      setCaptchaCode('data:image/gif;base64,' + res.img)
    });
  }
  const { state, dispatch} = useContext(C);
  const navigate = useNavigate();

  const clickSubMenu = (menuData) => {
    const exist = Array.from(prop.tabs).some((tab) => tab.id == menuData.id);
    if (exist) {
      //
    } else {
      let newTabs = [...state.tabs, menuData]
      dispatch({type: 'setTabs', val: newTabs})
    }
    dispatch({type: 'setActiveMenuId', val:menuData.id})
    // navigate(menuData.path)
    getCaptchaCode()
  };

  const dataList = prop.dataList;
  const [subMenuDataList, setSubMenuDataList] = useState(
    dataList[0]?.chridList
  );

  const checkMenuFun = (menuId) => {
    dispatch({type:'setExpand', val: true})
    setSubMenuDataList(
      dataList.filter((menuData) => menuData.id == menuId)[0].chridList
    );
  };

  return (
    <div className="w-[180px] flex h-full text-xs">
      {/* 主菜单 */}
      <div className="w-[90px] flex flex-col shadow-lg">
        <ul>
          {dataList.map((menuData) => {
            return (
              <li
                key={menuData.id}
                className="px-4 pt-4 cursor-pointer"
                onClick={() => checkMenuFun(menuData.id)}
              >
                {menuData.name}
              </li>
            );
          })}
        </ul>
      </div>
      {/* 子菜单 */}
      <div className={"w-[90px] flex flex-col h-full" + (state.expand ? "" : " hidden")}>
        <ul>
          {subMenuDataList.map((menuData) => {
            if (menuData.title == true) {
              return (
                <li key={menuData.id} className="px-4 pt-4 text-ly-accent">
                  {menuData.name}
                </li>
              );
            } else {
              return (
                <li
                  key={menuData.id}
                  className="px-4 pt-4 cursor-pointer"
                  onClick={() => {
                    clickSubMenu(menuData);
                  }}
                >
                  {menuData.name}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
