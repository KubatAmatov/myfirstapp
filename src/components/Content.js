import React from "react";
import Img from "./Img";
import img1 from "../img/Background-1.png";

function Content() {
  return (
    <div className="floor-1">
      <div className="box-1">
        <h1>Find a gift for your wife or girlfriend</h1>
        <p>
          Struggling to find a gift for your wife or girlfriend? No problem!
        </p>
        <button className="Content-button">Find gift now</button>
      </div>
      <div className="box-2">
        <Img imgURL={img1} />
      </div>
    </div>
  );
}

export default Content;
