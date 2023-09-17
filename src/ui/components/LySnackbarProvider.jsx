import { SnackbarUtilsConfigurator } from "@/config/snackbar/SnackbarUtils";
import { SnackbarProvider } from "notistack";
import Grow from "@/config/snackbar/Grow";
import { Error } from "@mui/icons-material";

export default function LySnackbarProvider({ children }) {
  const anchorOrigin = {
    vertical: "top", // 垂直方向：顶部
    horizontal: "center", // 水平方向：右侧
  };


  return (
    <div className="overflow-y-scroll no-scrollbar h-screen w-full min-w-full font-lychee">
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={anchorOrigin}
        autoHideDuration={3000}
        TransitionComponent={Grow}
        iconVariant={
          {
            error: <Error className=" h-5 w-5 mr-2" ></Error>,
            // warn: <Warning className=" mr-2"></Warning>,
            // info: <Info className=" mr-2"></Info>,
            // success: <OneK className=" mr-2"></OneK>,
            // default: <DisabledByDefault className=" mr-2"></DisabledByDefault>,
          }
        }
      >
        <SnackbarUtilsConfigurator />
        {children}
      </SnackbarProvider>
    </div>
  );
}
