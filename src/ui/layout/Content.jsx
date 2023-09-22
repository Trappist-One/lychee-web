import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/loading/index";

export default function Content() {
    return (
        <div className="h-full w-full p-2 bg-gray-100">
            <div className="h-full w-full scroll-auto">
                <Suspense fallback={<Loading />}>
                    <Outlet></Outlet>
                </Suspense>
            </div>
        </div>
    );
}
