import React from "react";
import "./Navbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { DrawCallback } from "../../App";
import { NavLink } from "react-router-dom";

interface Props {
  drawerClickHandler: DrawCallback;
}

export default function Navbar({drawerClickHandler}: Props) {
  return (
    <header className="navbar">
      <nav className="navigation">
        <div className="navbar-toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="navbar-logo">
          <a href="/">THE LOGO</a>
        </div>
        <div className="navbar-items">
          <ul>
            <li>
            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/story" activeClassName="selected">Story</NavLink>
            </li> */}
            <li>
            <NavLink to="/menu" activeClassName="selected">Menu</NavLink>
            </li>
            <li>
            <NavLink to="/login" activeClassName="selected">Sign In</NavLink>
            </li>
            <li>
            <NavLink to="/register" activeClassName="selected">Register</NavLink>
            </li>
            <li>
            <NavLink to="/usermanagement" activeClassName="selected">User Management</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
