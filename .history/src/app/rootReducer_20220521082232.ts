import authSlice from 'features/auth/authSlice'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  auth: authSlice,
})
