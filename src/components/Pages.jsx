import React from "react";
//? import home page images
import SolarPanels from "../assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "../assets/Desktop-SolarRoof.jpeg";
import ModelX from "../assets/Desktop-ModelX.jpeg";
import ModelY from "../assets/Desktop-ModelY.jpeg";
import Model3 from "../assets/Desktop-Model3.jpeg";
import ModelS from "../assets/Desktop-ModelS.jpeg";
import Accessories from "../assets/Desktop-Accessories.jpg";
import Item from "./Item";
import "./Pages.css";

function Pages() {
  return (
    <div className="app__itemContainer">
      <Item
        title="Model S"
        desc="Order Online for Touchless Delivery"
        descLink=""
        backgroundImg={ModelS}
        leftBtnTxt="Custom Order"
        leftBtnLink="https://www.tesla.com/models/design"
        rightBtnTxt="Existing Inventory"
        rightBtnLink="https://www.tesla.com/inventory/new/ms"
        twoButtons="true"
        first
      />
      <Item
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        descLink=""
        backgroundImg={ModelY}
        leftBtnTxt="Custom Order"
        leftBtnLink="https://www.tesla.com/modely/design"
        rightBtnTxt="Learn More"
        rightBtnLink="https://www.tesla.com/modely"
        twoButtons="true"
      />
      <Item
        title="Model 3"
        desc="Order Online for Touchless Delivery "
        descLink=""
        backgroundImg={Model3}
        leftBtnTxt="Custom Order"
        leftBtnLink="https://www.tesla.com/model3/design"
        rightBtnTxt="Existing Inventory"
        rightBtnLink="https://www.tesla.com/inventory/new/m3"
        twoButtons="true"
      />
      <Item
        title="Model X"
        desc="Order Online for Touchless Delivery "
        descLink=""
        backgroundImg={ModelX}
        leftBtnTxt="Custom Order"
        leftBtnLink="https://www.tesla.com/model3/design"
        rightBtnTxt="Existing Inventory"
        rightBtnLink="https://www.tesla.com/inventory/new/mx"
        twoButtons="true"
      />
      <Item
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarantee "
        descLink=""
        backgroundImg={SolarPanels}
        leftBtnTxt="Order Now"
        leftBtnLink="https://www.tesla.com/energy/design"
        rightBtnTxt="Learn More"
        rightBtnLink="https://www.tesla.com/solarpanels"
        twoButtons="true"
      />
      <Item
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels "
        descLink=""
        backgroundImg={SolarRoof}
        leftBtnTxt="Order Now"
        leftBtnLink="https://www.tesla.com/energy/design"
        rightBtnTxt="Learn More"
        rightBtnLink="https://www.tesla.com/solarroof"
        twoButtons="true"
      />
      <Item
        title="Accessories"
        desc="Money-back guarantee"
        descLink=""
        backgroundImg={Accessories}
        leftBtnTxt="Shop Now"
        leftBtnLink=""
      />
    </div>
  );
}

export default Pages;
