import {
  Avatar,
  Popper,
  Fade,
  IconButton,
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
  const [anchorEl, setAnchorEl] = useState(null);
  const { state, dispatch } = useContext(C);

  const [placement, setPlacement] = useState();
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const expandFun = () => {
    dispatch({ type: "setExpand", val: !state.expand });
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

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
                onClick={handleClick()}
              >
               <Avatar
                  className=" border w-8 h-8"
                  src="https://api.dicebear.com/6.x/adventurer/svg?seed=Abby"
                ></Avatar>
                
                </IconButton>
      

              <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="bottom"
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps}>
                    <div>
                      <UserProfileList></UserProfileList>
                    </div>
                  </Fade>
                )}
              </Popper>

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
