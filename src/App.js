import React from "react";
import "./styles.css";
import DropdownControlled from "./Layout/Dropdown";
import { Navbar, NavbarBrand } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LabOne from "./Component/LabOne";

export default function App() {
  return (
    <Router>
      <Navbar dark color="dark">
        <NavbarBrand>Assignment</NavbarBrand>
      </Navbar>
      <br />
      <>
        <Route exact path="/" component={DropdownControlled} />
        <Route exact path="/cipher-lab-one" component={LabOne} />
      </>
    </Router>
  );
}
