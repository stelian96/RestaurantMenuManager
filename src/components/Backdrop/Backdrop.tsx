import React from "react";
import "./Backdrop.css";

interface Props {
  
}

export default function Backdrop(props: any) {
  return <div className="backdrop" onClick={props.click} />;
}
