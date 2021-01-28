import React from "react";
import "./Item.css";
function Item() {
  return (
    <div className="item" style={{}}>
      <div className="itemContainer">
        <div className="itemTitle">
          <p>title</p>
          <div className="itemDescription">
            <p>description</p>
          </div>
        </div>
        <div className="itemLowerThird">
          <div className="itemButtons"></div>
          <div className="expandMoreIcon">{/* Expand More Icon */}</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
