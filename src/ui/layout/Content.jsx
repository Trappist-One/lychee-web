import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Tab1 from "@/ui/pages/Tab1";
import Tab2 from "@/ui/pages/Tab2";
import Tab3 from "@/ui/pages/Tab3";

import NoAuth from "../pages/common/NoAuth";
import Dashboard from "@/ui/pages/dashboard";
import { useEffect } from "react";

export default function Content() {
    const navigate = useNavigate()
    useEffect(() => {
        // navigate("/bashboard")
    }, [])
    return (
        <div className="h-full w-full p-2 bg-gray-100">
            <div className="h-full w-full scroll-auto">
                <Routes>
                    <Route path="*" element={<NoAuth />}></Route>
                    <Route path="tab1" element={<Tab1 />}></Route>
                    <Route path="/tab2" element={<Tab2 />}></Route>
                    <Route path="/tab3" element={<Tab3 />}></Route>
                    <Route path="/bashboard" element={<Dashboard />}></Route>
                </Routes>
                {/* <Outlet></Outlet> */}
            </div>
        </div>
    );
}
