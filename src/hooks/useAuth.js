import { getInfo } from "@/api/login";
import { useState, useEffect } from "react";

export default function useAuth() {
  const [auth, setAuth] = useState({
    isLogin: false,
    superAdmin: false,
    nickname: "",
    roles: [],
    permissions: [],
    user: {},
  });

  useEffect(() => {
    getRemoteInfo();
  }, []);

  const getRemoteInfo = async () => {
    const res = await getInfo();
    if (res.code == 0) {
        console.log(res.data);
      setAuth({
        ...res.data,
        isLogin: true,
        superAdmin: res.data.roles.includes("super_admin"),
        nickname: res.data.user.nickname,
      });
    }
  };

  return { auth };
}
