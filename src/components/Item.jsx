import React from "react";
import Button from "./Button";
import "./Item.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Item({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
}) {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="itemContainer">
        <div className="itemText">
          <p>{title}</p>
          <div className="itemDescription">
            <p>{desc}</p>
          </div>
        </div>
        <div className="itemLowerThird">
          <div className="itemButtons">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className="expandMoreIcon">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
