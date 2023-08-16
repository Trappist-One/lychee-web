import { useState } from "react";

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
      <div className=" flex h-full">
        <div className=" bg-orange-300  w-1/2 h-full">
        </div>

        <div className=" bg-blue-400 w-1/2   h-full"></div>
      </div>
    </div>
  );
}
