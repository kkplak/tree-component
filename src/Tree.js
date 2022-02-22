import React, { useState } from "react";


const Tree = ({ data = [] }) => {
    return (
      <div className="d-tree">
        <ul className="d-tree-container">
          {data.map((tree) => (
            <TreeNode node={tree} />
          ))}
        </ul>
      </div>
    );
  };
  
const TreeNode = ({ node }) => {

    const [childVisible, setChildVisiblity] = useState(false);
  
    const hasChild = node.children ? true : false;

  
 return (
      <li className="d-tree-node">

        <div onClick={(e) => setChildVisiblity((v) => !v)}> {hasChild && (
            <div
              className={` ${ childVisible ? "active" : "" }`}>       
            </div>
          )}
  
          <div>
            {node.label}
          </div>
        </div>
  
        {hasChild && childVisible && (
          <div>
            <ul className="d-tree-container">
              <Tree data={node.children} />
            </ul>
          </div>
        )}
      </li>
    );
  };
  
  export default Tree;