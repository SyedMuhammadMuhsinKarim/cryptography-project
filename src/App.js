import React from "react";
import "./styles.css";
import DropdownControlled from "./Layout/Dropdown";
import { Navbar, NavbarBrand } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LabOne from "./Component/LabOne";
import LabTwo from "./Component/LabTwo";
import * as ROUTES from "./constant/routes";
import LabThree from "./Component/LabThree";
import LabFour from "./Component/LabFour";

export default function App() {
  return (
    <Router>
      <Navbar dark color="dark">
        <NavbarBrand>Assignment</NavbarBrand>
      </Navbar>
      <br />
      <>
        <Route exact path="/" component={DropdownControlled} />
        <Route exact path={ROUTES.CIPHERONE} component={LabOne} />
        <Route exact path={ROUTES.CIPHERTWO} component={LabTwo} />
        <Route exact path={ROUTES.CIPHERTHREE} component={LabThree} />
        <Route exact path={ROUTES.CIPHERFOUR} component={LabFour} />
      </>
    </Router>
  );
}
