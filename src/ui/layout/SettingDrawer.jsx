
import {Drawer, Box } from "@mui/material";
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
      
    return (
        <Fragment key="settingDrawer">
        <Drawer
          anchor="right"
          open={prop.open}
          onClose={toggleDrawer(false)}
        >
          <Box>
            <div>111</div>
          </Box>
        </Drawer>
      </Fragment>
    )

}