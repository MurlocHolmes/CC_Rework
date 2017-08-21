import { combineReducers } from 'redux'
import {
  ADD_USER_NAME
} from './actions'

function user_info(state = [], action) {
  switch (action.type) {
    case ADD_USER_NAME:
      return {
        ...state,
        userName: action.name
      };
    default:
      return state
  }
}

const AppStore = combineReducers({
  user_info
})

export default AppStore