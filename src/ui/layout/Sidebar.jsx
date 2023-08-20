import { useEffect, useState } from "react";
import { menuDataList } from "./data";

export default function Silder() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-[180px] h-full shadow-md bg-white flex flex-col">
      <div className=" h-10 bg-white">
        <img
          className="h-10 w-8 m-auto"
          src="../src/assets/icons/logo.svg"
        ></img>
      </div>
      <div className=" w-4/5 h-[2px] bg-red-200 mx-auto"></div>
      <MenuList dataList={menuDataList}></MenuList>
    </div>
  );
}

const MenuList = (prop) => {
  const dataList = prop.dataList
  const [subMenuDataList, setSubMenuDataList] = useState(
    dataList[0]?.chridList
  );

  const checkMenuFun = (menuId) => {
    setSubMenuDataList(
      dataList.filter((menuData) => menuData.id == menuId)[0].chridList
    );
  };

  return (
    <div className="w-[180px] flex h-screen text-xs overflow-hidden">
      <div className="w-1/2  flex flex-col shadow-lg">
        <ul>
          {dataList.map((menuData) => {
            return (
              <li
                key={menuData.id}
                className="px-4 py-2 cursor-pointer"
                onClick={() => checkMenuFun(menuData.id)}
              >
                {menuData.menuName}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-1/2 flex flex-col h-screen">
        <ul>
          {subMenuDataList.map((menuData) => {
            if (menuData.title == true) {
              return <li key={menuData.id} className="px-4 py-2 text-blue-300">{menuData.menuName}</li>;
            } else {
              return <li key={menuData.id} className="px-4 py-2 cursor-pointer">{menuData.menuName}</li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
};
