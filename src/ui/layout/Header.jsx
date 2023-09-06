import {
  Avatar,
  Popper,
  Fade,
  IconButton,
  Popover,
} from "@mui/material";
import { Fullscreen, Settings } from "@mui/icons-material";
import { C } from "./Layout";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { useContext, useState } from "react";
import SettingDrawer from "./SettingDrawer";
import UserProfileList from "../components/UserProfileList";
import screenfull from 'screenfull'

export default function Header() {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(C);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  const expandFun = () => {
    dispatch({ type: "setExpand", val: !state.expand });
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  const id =  "userSettingList-popover";

  return (
    <>
      <div className="h-12 shadow-md-b w-full p-2 flex ">
        <div className="w-full h-full flex justify-between items-center">
          <div>
            <IconButton aria-label="delete" size="small" onClick={expandFun}>
              {state.expand ? (
                <TbLayoutSidebarLeftCollapse size={24} color={"#666"} />
              ) : (
                <TbLayoutSidebarRightCollapse size={24} color={"#666"} />
              )}
            </IconButton>
          </div>
          <div>
            <div className="w-full h-full flex items-center justify-end gap-x-2">
              <IconButton
                size="small"
                onClick={() => screenfull.toggle()}
              >
                <Fullscreen />
              </IconButton>

              <IconButton
                size="small"
                onClick={() => setOpenDrawer(true)}
              >
                <Settings />
              </IconButton>
              <IconButton
                aria-label="cursor-pointer"
                size="small"
                onClick={handleOpen}
              >
                <Avatar
                  className=" border w-8 h-8"
                  src="https://api.dicebear.com/6.x/adventurer/svg?seed=Abby"
                ></Avatar>
              </IconButton>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <UserProfileList></UserProfileList>
              </Popover>

              <SettingDrawer
                open={openDrawer}
                setOpen={setOpenDrawer}
              ></SettingDrawer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
