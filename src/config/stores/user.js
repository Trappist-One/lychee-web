import { createSlice } from "@reduxjs/toolkit";

export const userStore = createSlice({
  name: "userStore",
  initialState: {
    isLogin: false,
    menus: [],
    perms: [],
    roles: [],
    routes: [],
    user: {},
  },
  reducers: {
    setLogin: (state, action) => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
      // 并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
      // 不可变的状态
      state.isLogin = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setMenus: (state, action) => {
      state.menus = action.payload;
    },
    setRoutes: (state, action) => {
      state.routes = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setPerms: (state, action) => {
      state.perms = action.payload;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { setLogin, setMenus, setRoles, setRoutes, setUser, setPerms } =
  userStore.actions;

export default userStore.reducer;
