import React from "react";
import GiftCard from "./GiftCard";
import img1 from "../img/Rectangle.png";
import img2 from "../img/Rectangle-1.png";
import img3 from "../img/Rectangle-2.png";
import img4 from "../img/Rectangle-3.png";

function Gifts() {
  return (
    <div className="gifts">
      <h2 className="title">Gifts for all Occasions</h2>
      <p className="subtitle">
        “Try our web app to find the best gifts for all occasions”
      </p>

      <div className="GiftContainer">
        <GiftCard imgURL={img1} title="osi;dfla" />
        <GiftCard imgURL={img2} title="osi;dfla" />
        <GiftCard imgURL={img3} title="osi;dfla" />
        <GiftCard imgURL={img4} title="osi;dfla" />
      </div>
    </div>
  );
}

export default Gifts;
