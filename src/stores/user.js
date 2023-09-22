import { createSlice } from '@reduxjs/toolkit'

export const userStore = createSlice({
    name: 'userSlice',
    initialState: {
        isLogin: false,
        superAdmin: false,
        menus: [],
        perms: [],
        roles: [],
        routes:[],
        nickname: '',
        id: undefined
    },
    reducers: {
        setLogin: (state, action) => {
            // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
            // 并不是真正的改变状态值，因为它使用了 Immer 库
            // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
            // 不可变的状态
            state.isLogin = action.value
        },
        setMenus: (state, action) => {
            state.menus = action.value
        },
        setRoutes: (state, action) => {
            state.routes = action.value
        }
    }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { setLogin, setMenus, setRoutes } = userStore.actions

export default userStore.reducer