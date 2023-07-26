import React from "react";

export default function MidPaneCard({
  main_icon,
  main_title,
  main_val,
  sub_icon,
  sub_value,
}) {
  return (
    <div className="card">
      <span>{main_icon}</span>
      <span>
        <h4>{main_title}</h4>
        <h2>{main_val}</h2>
      </span>
      <span>
        {sub_icon}
        <h5>{sub_value}</h5>
      </span>
    </div>
  );
}
