import { combineReducers } from 'redux';
import { data } from './resources';
import * as actions from './actions';


export const treeViewData = (state = [] , action) => {
  switch (action.type) {
    case actions.GET_TREE_DATA:
      return data.nodes;
    default:
      return state;
  }
};

export default combineReducers({
  treeViewData,
});