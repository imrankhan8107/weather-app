import React from "react";

import { MdHomeFilled, MdMap, MdSavedSearch } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";
import PaneElement from "./PaneElement";
import "../styles/leftpane.css";

export default function LeftPane() {
  return (
    <div className="left-pane">
      <PaneElement
        icon={<MdHomeFilled className="icon" />}
        text={"Home"}
        link={"/"}
        // className={currentTab === "Home" ? "active" : ""}
      />
      <PaneElement
        icon={<MdMap className="icon" />}
        text={"Map"}
        link={"/maps"}
        // className={currentTab === "Map" ? "active" : ""}
      />
      <PaneElement
        icon={<MdSavedSearch className="icon" />}
        text={"Saved Locations"}
        link={"/saved-locations"}
        // className={currentTab === "saved_locations" ? "active" : ""}
      />
      <PaneElement
        icon={<IoIosCalendar className="icon" />}
        text={"Calender"}
        link={"/calender"}
        // className={currentTab === "Calender" ? "active" : ""}
      />
    </div>
  );
}
