// import { IUser } from './users.reducer'
import { ActionType } from '../constants/action.types'

export function ActiveUserReducer(state = null, action) {
  switch (action.type) {
    case ActionType.SELECTED_USER:
      return action.payload

    default:
      return state
  }
}
