import { combineReducers } from 'redux'
import { UserReducer } from './users.reducer'
import { ActiveUserReducer } from './active-user.reducer'

export const rootReducer = combineReducers({
  activeUser: ActiveUserReducer,
  users: UserReducer,
})
