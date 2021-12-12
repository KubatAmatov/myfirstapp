import React from "react";
import Img from "./Img";
import img1 from "../img/Media.png";
function TheerdFloor() {
  return (
    <div className="box_3">
      <div className="information">
        <h1>Our Best Blogs Ever</h1>
        <p>
          “Try our blog to find the best tips and tricks to select your gift”
        </p>
      </div>
      <div className="information_1">
        <div className="information_box">
          <Img imgURL={img1} />
        </div>
        <div className="information_box_1">
          <p className="ggg">Mr. John Doe</p>
          <h1>The best way to wish your wife</h1>
          <p className="gggg">Read More</p>
        </div>
      </div>
      <div className="information_2">
        <div className="information_box_2">
          <h1>Database to find the gifts for your girlfriend</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore...
          </p>
          <button>Read More</button>
        </div>
        <div className="information_box_3">
          <h1>
            How Artificial Intelligence read your mind to find the best gift
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore...
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default TheerdFloor;
