import { useTranslation } from "react-i18next";
import Logo from "../../components/Logo";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { getCodeImg } from "@/api/login";
import { useEffect } from "react";

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const loginFun = () => {
    navigate('/index')
  }

  let uuid;
  let codeUrl;

  useEffect(() => {
    getCodeImg().then((res) => {
        console.log(res);
      });
  })

  return (
    <div className="flex h-full w-full">
      <div className="flex h-full w-full flex-col px-10 pt-10 pb-2 bg-[url('assets/icons/login_undraw.svg')] bg-no-repeat background-blur-md">
        <div className="">
          <div>
            <Logo size="32"></Logo>
          </div>
          <div className="h-32 w-full flex items-center justify-center text-3xl">
            {t("嗨，欢迎回来！")}
          </div>
          <div className="mt-20 ">
            <div className="flex items-center justify-center ">
              <img
                src="assets/icons/login_undraw.svg"
                className="h-60 w-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[600px] bg-red-300 px-5 flex items-center rounded-3xl">
        <div className="w-full h-[500px]">
          <div className=" grid grid-cols-1 gap-8">
            <div className=" text-center text-white">
              { t('荔枝后台管理系统')}
            </div>
            <TextField id="outlined-basic" 
            label={t("用户名")} />
            <TextField
              id="outlined-password-input"
              label={t("密码")}
              type="password"
              autoComplete="current-password"
            />
            <div className="flex justify-between">
                <div className="h-10 w-[200px] bg-slate-300"></div>
                <TextField variant="standard" className="h-10 w-20"></TextField>
            </div>
            <Button variant="contained" fullWidth size="large" onClick={() => loginFun()}>{t('登录')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
