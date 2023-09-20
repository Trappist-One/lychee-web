import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "@/ui/components/loading/index";
import NoFound from "@/ui/pages/common/NoFound";
import Tab1 from "@/ui/pages/Tab1";

export default function Content(props) {
  return (
    <div className="h-full w-full p-2 bg-gray-100">
      <div className="h-full w-full scroll-auto">
   
        <Outlet></Outlet>
      </div>
    </div>
  );
}
