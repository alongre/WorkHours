import { combineReducers } from 'redux';
import clock from '../clock';
import treeView from '../treeView';

export default combineReducers({
    clock: clock.reducer,
    treeView: treeView.reducer,
});