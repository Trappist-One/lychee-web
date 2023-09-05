import { Outlet } from "react-router-dom";

export default function Content() {
    return (
        <div className="h-full w-full p-2 bg-gray-100">
            <div className="h-full w-full scroll-auto">
                <Outlet></Outlet>
            </div>
        </div>
    )
}