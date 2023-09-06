import { useTranslation } from "react-i18next";
import Logo from "../../components/Logo";
import { Button, TextField } from "@mui/material";

export default function Login() {
  const { t } = useTranslation();
  return (
    <div className="flex h-full w-full bg-white">
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
      <div className="h-full w-[600px] bg-red-300 px-5 flex items-center">
        <div className="w-full h-[500px]">
          <div className=" grid grid-cols-1 gap-8">
            <div className=" text-center text-white">
               LYCHEE MANAGE SYSTEM
            </div>
            <TextField id="outlined-basic" label="username" />
            <TextField
              id="outlined-password-input"
              label="password"
              type="password"
              autoComplete="current-password"
            />
            <div className="flex  flex-row-reverse">
            <Button variant="contained">Login</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
