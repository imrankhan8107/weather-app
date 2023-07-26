import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { weatherContext } from "../App";
import "../styles/PaneElement.css";

export default function PaneElement({ icon, text, link }) {
  const { currentTab, setcurrentTab } = useContext(weatherContext);
  return (
    <Link to={link}>
      <div
        className={`pane-element ${currentTab === text ? "active" : ""}`}
        onClick={() => {
          setcurrentTab(text);
        }}
      >
        {icon}
        {text}
      </div>
    </Link>
  );
}
