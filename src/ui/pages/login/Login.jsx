import { useTranslation } from "react-i18next";
import Logo from "@/ui/components/logo/index";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@/api/login";
import { setTenantId as setLocalTenantId, getTenantId, setToken } from "@/utils/auth";
import { LoadingButton } from "@mui/lab";
import router from "@/config/router/router";
import { useSelector ,useDispatch } from "react-redux";
import { setLogin } from "@/config/stores/user";
import stores from "@/config/stores/index";


export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const loginSubmit = async (formData) => {
    setLoading(true)
    login(formData.userName, formData.password)
      .then((res) => {
        setToken(res.data)
        dispatch(setLogin(true))
        navigate("/");
      })
      .catch(error => {
        navigate("/login");
        console.log(error);
      }).finally(() => {
        setLoading(false)
      });
  };

  const[loading, setLoading] = useState(false)

  const localTenantId = getTenantId() ? getTenantId() : 1;
  setLocalTenantId(localTenantId);

  const [tenantId, setTenantId] = useState(localTenantId);

  const changeTalent = (event) => {
    setTenantId(event.target.value);
    setLocalTenantId(event.target.value);
  };

  const validationLoginSchema = yup.object().shape({
    userName: yup.string().required(t("用户名不能为空")),
    password: yup.string().required(t("密码不能为空")),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationLoginSchema),
  });

  const routes = useSelector(state => state.userStore.routes)
  router.routes[0].children = routes


  stores.subscribe(() => {
    console.log('subscribe...');
    router.routes[0].children = stores.getState().routes
    console.log(stores.getState())
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
      <form
        className="h-full w-[500px] bg-red-300 px-5 flex items-center rounded-3xl"
        onSubmit={handleSubmit(loginSubmit)}
      >
        <div className="w-full h-[500px]">
          <div className=" grid grid-cols-1 gap-8">
            <div className=" text-center text-white">
              {t("荔枝后台管理系统")}
            </div>
            <FormControl>
              <InputLabel id="talent-select-id">{t("租户")}</InputLabel>
              <Select
                id="tenantId"
                value={tenantId}
                label={t("租户")}
                {...register("tenantId")}
                onChange={changeTalent}
                labelId="talent-select-id"
              >
                <MenuItem value="1">芋道源码</MenuItem>
                <MenuItem value="2">荔枝后台</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="userName"
              label={t("用户名")}
              {...register("userName")}
              helperText={errors.userName?.message}
            />
            <TextField
              id="password"
              label={t("密码")}
              type="password"
              {...register("password")}
              autoComplete="current-password"
              helperText={errors.password?.message}
            />
            <LoadingButton loading={loading} variant="contained" fullWidth size="large" type="submit">
              {t("登录")}
            </LoadingButton>
          </div>
        </div>
      </form>
    </div>
  );
}
