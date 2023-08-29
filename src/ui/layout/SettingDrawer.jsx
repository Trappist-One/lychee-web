import {
  Divider,
  Drawer,
  Grid,
  Select,
  ListItem,
  MenuItem,
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
            <Select onChange={handleChangeTheme} className=" h-10 w-3/5">
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
            </Select>
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
}
