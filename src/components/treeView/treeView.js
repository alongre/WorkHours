import { Tree, Position, Toaster, Intent } from '@blueprintjs/core';
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './treeView.css';

const OurToaster = Toaster.create({
    className: "my-toaster",
    position: Position.TOP,
});


class treeView extends Component {
    state = {
        nodes: this.props.nodes,
    }
    componentDidMount () {
        this.props.getTreeData();
    }
    render () {
        return (
           <Tree
                contents={this.props.nodes}
                onNodeClick={this.handleNodeClick}
                onNodeCollapse={this.handleNodeCollapse}
                onNodeExpand={this.handleNodeExpand}
                className={"treeView"}
            />
        )
    }

     handleNodeClick = (nodeData, _nodePath, e) => {
        // const key = OurToaster.show({ message: "Toasted!" });
       //  OurToaster.update(key, { message: "Still toasted!" });
         OurToaster.show(
             { 
                 message: nodeData["label"], 
                 iconName: "pt-icon-automatic-updates", 
                 intent: Intent.PRIMARY,   
            });
      //  const originallySelected = nodeData.isSelected;
       // if (!e.shiftKey) {
         //   this.forEachNode(this.state.nodes, (n) => n.isSelected = false);
        // }
       // nodeData.isSelected = originallySelected == null ? true : !originallySelected;
        this.setState(this.state);
    }

    handleNodeCollapse = (nodeData) => {
        nodeData.isExpanded = false;
        this.setState(this.state);
    }

    handleNodeExpand = (nodeData) => {
        nodeData.isExpanded = true;
        this.setState(this.state);
    }

    forEachNode = (nodes,  callback = (node) => void{} ) => {
        if (nodes == null) {
            return;
        }

        for (const node of nodes) {
            callback(node);
            this.forEachNode(node.childNodes, callback);
        }
    }
}

treeView.propTypes = {
    nodes: PropTypes.arrayOf(Object).isRequired,
    getTreeData: PropTypes.func.isRequired,
}


export default treeView

