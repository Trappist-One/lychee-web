import { Cancel } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

let useSnackbarRef;
export const SnackbarUtilsConfigurator = () => {
  useSnackbarRef = useSnackbar();
  return null;
};
const closeSnackbar = (key) => {
  useSnackbarRef.closeSnackbar(key);
};

export default {
  success(msg, options = {}) {
    this.toast(msg, { ...options, variant: "success" });
  },
  warning(msg, options = {}) {
    this.toast(msg, { ...options, variant: "warning" });
  },
  info(msg, options = {}) {
    this.toast(msg, { ...options, variant: "info" });
  },
  error(msg, options = {}) {
    this.toast(msg, { ...options, variant: "error" });
  },
  toast(msg, options = {}) {
    const finalOptions = {
      variant: "default",
      action: (key) => {
        return (
          <Button color="inherit" size="small" onClick={() => closeSnackbar(key)}>
            <Cancel></Cancel>
          </Button>
        );
      },
      ...options,
    };
    useSnackbarRef.enqueueSnackbar(msg, finalOptions);
  },
};
