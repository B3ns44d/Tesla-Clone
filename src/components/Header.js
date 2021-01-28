import React from "react";
import "./Header.css";
import Logo from "../assets/teslaLogoSmall.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <Router>
      <div className="header">
        <div className="headerLogo">
          <Link to={"/"}>
            <img src={Logo} alt="Tesla Logo" />
          </Link>
        </div>
        <div className="headerCenter">
          <Link to={"/models"} className="headerText">
            Model S
          </Link>
          <Link to={"/models3"} className="headerText">
            Model 3
          </Link>
          <Link to={"/modelx"} className="headerText">
            Model X
          </Link>
          <Link to={"/modely"} className="headerText">
            Model Y
          </Link>
          <Link to={"/solarroof"} className="headerText">
            Solar Roof
          </Link>
          <Link to={"/solarpanels"} className="headerText">
            Solar Panels
          </Link>
        </div>
        <div className="headerRight">
          <Link to={"/shop"} className="headerText">
            Shop
          </Link>
          <Link to={"/teslaaccount"} className="headerText">
            Tesla Account
          </Link>
          <div className="menuIcon">
            <MenuIcon />
          </div>
        </div>
        <Switch>
          <Route path="/">{/* <App /> */}</Route>
          <Route path="/models">{/* <Models /> */}</Route>
          <Route path="/models3">{/* <Models3 /> */}</Route>
          <Route path="/modelx">{/* <Modelsx /> */}</Route>
          <Route path="/modely">{/* <Modely /> */}</Route>
          <Route path="/solarroof">{/* <Solarroof /> */}</Route>
          <Route path="/solarpanels">{/* <Solarpanels /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Header;
