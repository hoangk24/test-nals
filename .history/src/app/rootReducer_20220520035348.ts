import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  app: appSlice,
  auth: authSlice,
})
