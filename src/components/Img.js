import React from "react";
function Img({ imgURL }) {
  return (
    <div className="img-card">
      <img src={imgURL} alt="" />
    </div>
  );
}

export default Img;
