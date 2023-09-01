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
        <div className="w-52 py-5 px-3 h-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Divider flexItem>主题</Divider>
            <div className="w-full flex justify-center gap-8">
              {themes.map((theme) => {
                let colors = [];
                let name;
                Object.keys(theme).map((key) => {
                  name = key;
                  Object.keys(theme[key]).map((color) => {
                    colors.push(theme[key][color]);
                  });
                });
                colors = colors.slice(0, 4);
                return (
                  <>
                    <ThemeBlock
                      checked="true"
                      colors={colors}
                      name={name}
                      key={crypto.randomUUID()}
                    ></ThemeBlock>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
}

const ThemeBlock = (prop) => {
  const checkedBorder = prop.checked
    ? " border-red-200"
    : " border-bg-gray-400";
  return (
    <div key={crypto.randomUUID()}>
      <div
        className={
          "h-8 w-8 flex flex-col items-center border-2 justify-center rounded-lg cursor-pointer" +
          checkedBorder
        }
      >
        <div className="h-full w-full p-1 grid grid-cols-2 gap-1 place-content-center">
          {prop.colors.map((color, index) => {
            return (
              <>
                <div
                  className="h-2 w-2"
                  style={{ backgroundColor: color }}
                  key={index}
                ></div>
              </>
            );
          })}
        </div>
      </div>
      <div className="text-xs text-center mt-1">{prop.name}</div>
    </div>
  );
};
