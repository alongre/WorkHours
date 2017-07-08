import { connect } from 'react-redux';
import treeView from './treeView';
import * as selector from './data/selector';
import * as actions from './data/actions';

export const TreeViewContainer = connect(state => ({
  nodes: selector.getTreeViewData(state),
}), {
  getTreeData: actions.getTreeData,
})(treeView);