import { useEffect, useState } from "react";
import { menuDataList } from "./data";

export default function Silder() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-64 h-full shadow-md bg-red-100 flex flex-col">
      <div className=" h-10 bg-white">
        <img
          className="h-10 w-8 m-auto"
          src="../src/assets/icons/logo.svg"
        ></img>
      </div>
      <div className=" w-4/5 h-[2px] bg-red-200 mx-auto"></div>
      <MenuList></MenuList>
    </div>
  );
}

const MenuList = () => {
  const subMenuDataList = menuDataList[0].chridList;

  return (
    <div className="w-[208px] flex bg-yellow-100 h-screen">
      <div className="w-[104px] flex flex-col">
        <ul>
          {menuDataList.map((menuData) => {
            return (
              <li key={menuData.id} menuId={menuData.id}>
                {menuData.menuName}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[104px] flex flex-col bg-blue-200 h-screen">
        <ul>
          {subMenuDataList.map((menuData) => {
            return (
              <li key={menuData.id} menuId={menuData.id}>
                {menuData.menuName}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
