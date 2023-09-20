import i18n from "@/i18n/index";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { createContext, useEffect, useRef, useState } from "react";

const ConfirmDialogContext = createContext();

export default function LyConfirmDialog() {
  const t = i18n.t
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [onConfirm, setOnConfirm] = useState(() => {});

  const openDialog = (title, content, onConfirm) => {
    setTitle(title);
    setContent(content);
    setOnConfirm(() => onConfirm);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
    // setTitle("");
    // setContent("");
    setOnConfirm(() => {});
  };

  const handleConfirm = () => {
    onConfirm();
    closeDialog();
  };

  const confirmDialogInstanceRef = useRef();

  // 在组件挂载时注册全局确认对话框实例
  useEffect(() => {
    confirmDialogInstanceRef.current = {
      open: (title, content, onConfirm) => {
        openDialog(title, content, onConfirm)
      },
    };

    registerConfirmDialogInstance(confirmDialogInstanceRef.current);
  }, []);

  return (
    <ConfirmDialogContext.Provider value={{ openDialog }}>
      <Dialog
        open={open}
        aria-labelledby="ly-confirm-dialog-title"
        aria-describedby="ly-confirm-dialog-description"
      >
        <DialogTitle id="ly-confirm-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="ly-confirm-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>{t("取消")}</Button>
          <Button onClick={handleConfirm} autoFocus>
            {t("确认")}
          </Button>
        </DialogActions>
      </Dialog>
    </ConfirmDialogContext.Provider>
  );
}

// 创建全局确认对话框单例对象
export const confirmDialog = {
  open: null,
};

// 注册全局确认对话框实例
const registerConfirmDialogInstance = (instance) => {
  confirmDialog.open = instance.open;
};
