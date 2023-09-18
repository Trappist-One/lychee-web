import { RouterProvider } from "react-router-dom";
import { useEffect, useRef } from "react";
import router from "./routes";
import LySnackbarProvider from "@/ui/components/LySnackbarProvider";
import LyConfirmDialog, {
  registerConfirmDialogInstance,
} from "@/ui/components/LyConfirmDialog";

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

  const confirmDialogInstanceRef = useRef();

  // 在组件挂载时注册全局确认对话框实例
  useEffect(() => {
    confirmDialogInstanceRef.current = {
      openDialog: (title, content, onConfirm) => {
        // 打开确认对话框的实际实现
        console.log(title, content);
        onConfirm();
      },
    };

    registerConfirmDialogInstance(confirmDialogInstanceRef.current);
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
