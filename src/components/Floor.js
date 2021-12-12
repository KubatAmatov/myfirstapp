import React from "react";
import Img from "./Img";
import img2 from "../img/Media Background.png";
function Floor() {
  return (
    <div className="floor-2">
      <div className="box-3">
        <Img imgURL={img2} />
      </div>
      <div className="box-4">
        <h1>How we work</h1>
        <p>
          We’ve actually already asked hundreds of women what they want, and
          made a database with the results. All you have to do is take our short
          survey that only takes seconds, and our proprietary algorithm will
          match you with a few perfect gift options.
        </p>
        <button className="Floor-button">Learn More</button>
      </div>
    </div>
  );
}

export default Floor;
