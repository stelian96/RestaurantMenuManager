import React from "react";
import "./DrawerToggleButton.css";
import { DrawCallback } from "../../App";

interface Props {
  click: DrawCallback
}

export default function DrawerToggleButton({click}: Props) {
  const onHandleClick = () => {
    click(true);
  }
  
  return (
    <button className="toggle-button" onClick={onHandleClick}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  );
}
