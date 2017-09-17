import { combineReducers } from 'redux'
import {
  ADD_USER_NAME
} from './actions'
import { portfolio_info } from '../portfolio';
import { profile_info } from '../profile';

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
  user_info,
  portfolio_info,
  profile_info
});

export default AppStore;