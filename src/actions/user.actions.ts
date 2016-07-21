import { ActionType } from '../constants/action.types'

export const selectUser = (user) => {
  console.log(`You click on user ${user.first} ${user.last}`)
  return {
    payload: user,
    type: ActionType.SELECTED_USER,
  }
}
