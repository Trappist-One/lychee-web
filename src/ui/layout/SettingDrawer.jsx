import {
  Divider,
  Drawer
} from "@mui/material";
import { Fragment } from "react";

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

          </div>
        </div>
      </Drawer>
    </Fragment>
  );
}

const themeBlock = (prop) => {
  return (
    <>
    <div className=" h-3 w-3 p-1 grid grid-cols-4">
      {prop.colorGroup.map(
        color => {
          return (
          <>
          <div className={"h-1/2 w-1/2 " + color}></div>
          </>)
        }
      )}
    </div>
    </>
  )
}
