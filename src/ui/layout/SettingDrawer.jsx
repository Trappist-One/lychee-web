import { Divider, Drawer } from "@mui/material";
import { Fragment } from "react";

import themes from "@/assets/styles/themes/themes";

export default function SettingDrawer(prop) {
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    prop.setOpen(open);
  };

  const handleChangeTheme = (event) => {
    console.log(event);
  };

  return (
    <Fragment key="settingDrawer">
      <Drawer anchor="right" open={prop.open} onClose={toggleDrawer(false)}>
        <div className="w-52 py-5 px-3 h-full">
          <Divider flexItem>主题</Divider>
          <div className="w-full flex justify-center">
            {Object.keys(themes[0]).map((key) => {
              let colors = []

              Object.keys(themes[[0]][key]).map((key1) => {
                colors.push(themes[[0]][key][key1])
              })
              colors = colors.slice(0,4)
              console.log(colors);
              return <>
              <ThemeBlock checked="true" colors={colors} name={themes[0][key]} key={key}></ThemeBlock>
              </>
            })}
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
}

const ThemeBlock = (prop) => {
  const checkedBorder = prop.checked ? " border-red-400 " : " border-bg-gray-400";
  return (
    <>
    <div className={"h-4 w-4 p-1 flex flex-col items-center gap-1 border-2" + {checkedBorder}}>
    <div className="h-full w-full p-1 grid grid-cols-4">
        {prop.colors.map((color) => {
          return (
            <>
              <div className={"h-1/2 w-1/2 bg-[" + { color } + "]"}></div>
            </>
          );
        })}
      </div>
      <div className=" text-xs ">
        {prop.name}
      </div>
    </div>
    </>
  );
};
