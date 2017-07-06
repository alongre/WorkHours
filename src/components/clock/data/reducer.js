import { combineReducers } from 'redux';
import moment from 'moment'
import * as actions from './actions';

export const time = (state = 'Click button to see the time', action) => {
  switch (action.type) {
    case actions.SHOW_TIME:
      return moment().format('h:mm:ss a');
    default:
      return state;
  }
};

export default combineReducers({
  time,
});