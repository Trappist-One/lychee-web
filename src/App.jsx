import { RouterProvider } from "react-router-dom";
import { Suspense, useEffect } from "react";
import router from "@/config/router/router";
import LySnackbarProvider from "@/ui/components/lySnackbarProvider/index";
import LyConfirmDialog from "@/ui/components/lyConfirmDialog/index";
import NProgress from "nprogress";
import Loading from "@/ui/components/loading/index";
import store from '@/config/stores/index'
import { Provider } from 'react-redux'

function App() {
  NProgress.configure({ showSpinner: false });
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
      <Provider store={store}>
        <LySnackbarProvider>
          <LyConfirmDialog />
          <Suspense fallback={<Loading />}></Suspense>
          <RouterProvider router={router}></RouterProvider>
        </LySnackbarProvider>
      </Provider>

    </div>
  );
}

export default App;
