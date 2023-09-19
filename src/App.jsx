import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import router from "./routes";
import LySnackbarProvider from "@/ui/components/LySnackbarProvider";
import LyConfirmDialog from "@/ui/components/LyConfirmDialog";
import NProgress from "nprogress";
NProgress.configure({ showSpinner: false});

function App() {
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    }
    document
      .querySelector("html")
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  return (
    <div className="overflow-y-scroll no-scrollbar h-screen w-full min-w-full font-lychee">
      <LySnackbarProvider>
        <LyConfirmDialog/>
          <RouterProvider router={router}></RouterProvider>
      </LySnackbarProvider>
    </div>
  );
}

export default App;
