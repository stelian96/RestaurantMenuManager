import React from "react";
import "./SideDrawer.css";
import { NavLink } from "react-router-dom";

export default function SideDrawer(props: any) {
  let drawerClasses = "sideDrawer";
  if (props.show) {
    drawerClasses = "sideDrawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/story" activeClassName="selected">
            Story
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeClassName="selected">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="selected">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" activeClassName="selected">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
