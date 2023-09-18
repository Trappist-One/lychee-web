import LyConfirmDialog from "@/ui/components/LyConfirmDialog";
import { useRef } from "react";

let lyConfirmDialogRef = null;
export const ConfirmDialogConfigurator = () => {
    lyConfirmDialogRef = useRef(null);
    return <LyConfirmDialog ref={lyConfirmDialogRef} />
};

export default {
    confirm(title = '', content = '', cb = ()=> {}) {
        lyConfirmDialogRef.current.setTitle(title)
        lyConfirmDialogRef.current.setContent(content)
        lyConfirmDialogRef.current.callback = cb
        lyConfirmDialogRef.current.setOpen(true)
    }
}