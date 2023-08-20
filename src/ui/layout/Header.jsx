import { Avatar, Popper } from "@mui/material";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [placement, setPlacement] = useState();
  const handleClick = (newPlacement) => (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <>
      <div className="h-12 shadow-md bg-white w-full p-2">
        <div className=" bg-red-300 w-full h-full flex items-center justify-end gap-x-2">
          <label onClick={handleClick()} className=" cursor-pointer" aria-describedby={id}>
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
        <div>qqq</div>
      </Popper>

          <Avatar
            className=" border w-8 h-8"
            src="https://api.dicebear.com/6.x/adventurer/svg?seed=Abby"
          ></Avatar>
          <Avatar
            className=" border w-8 h-8"
            src="https://api.dicebear.com/6.x/adventurer/svg?seed=Abby"
          ></Avatar>
        </div>
      </div>


    </>
  );
}
