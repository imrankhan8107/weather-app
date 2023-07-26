import React from "react";
import { MiddlePane, RightPane } from "../components";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <MiddlePane />
      <RightPane />
    </div>
  );
}
