import { configureStore } from '@reduxjs/toolkit'
import  userStore  from './user'

export default configureStore({
  reducer: {userStore}
})