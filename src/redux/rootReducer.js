// ** Reducers Imports
import layout from './layout'
import navbar from './navbar'
import authReducer from './auth/authSlice'
import users from '@src/views/apps/user/store'
import goal from '../views/apps/Tast/goalSlice'

const rootReducer = { navbar, layout, authReducer, users, goal }

export default rootReducer
