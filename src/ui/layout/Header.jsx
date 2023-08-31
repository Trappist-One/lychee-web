import { Avatar, Popper, Fade, IconButton } from "@mui/material";
import { Expand, Settings } from "@mui/icons-material";
import { C } from "./Layout";

import { useContext, useState } from "react";
import SettingDrawer from "./SettingDrawer";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { state, dispatch } = useContext(C);

  const [placement, setPlacement] = useState();
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const expandFun = () => {
    dispatch({type:'setExpand', val: !state.expand})
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <>
      <div className="h-12 shadow-md bg-white w-full p-2 flex ">
        <div className=" bg-red-300 w-full h-full flex justify-between items-center">
          <div>
            <IconButton aria-label="delete" size="small" onClick={expandFun}>
              <Expand />
            </IconButton>
          </div>
          <div>
            <div className="w-full h-full flex items-center justify-end gap-x-2">
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => setOpenDrawer(true)}
              >
                <Settings />
              </IconButton>
              <label
                onClick={handleClick()}
                className=" cursor-pointer"
                aria-describedby={id}
              >
                <Avatar
                  className=" border w-8 h-8"
                  src="https://api.dicebear.com/6.x/adventurer/svg?seed=Abby"
                ></Avatar>
              </label>

              <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="bottom"
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps}>
                    <div>11</div>
                  </Fade>
                )}
              </Popper>

              <SettingDrawer open={openDrawer} setOpen={setOpenDrawer}></SettingDrawer>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
