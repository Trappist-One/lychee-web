import { useNavigate } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { confirmDialog } from "@/ui/components/lyConfirmDialog";
import Loading from "../loading/index";
let isLogin = false;
let hasPrem = true;

export default function AuthRouth(props) {
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

  const Compnoent = lazy(() => import(`../pages/${props.component}`));

  console.log(111);

  // return <Suspense fallback={<Loading />}>{compnoent}</Suspense>;
  return <Compnoent/>

}
