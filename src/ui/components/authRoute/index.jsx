import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { confirmDialog } from "@/ui/components/lyConfirmDialog/index";
let isLogin = false;
let hasPrem = true;

export default function AuthRouth() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      confirmDialog.open(
        "系统提示",
        "登录状态已过期，您可以继续留在该页面，或者重新登录",
        () => {
          window.location.href = "/login";
        }
      );
    }

    if (!hasPrem) {
      navigate("/noAuth");
    }
  });
}
