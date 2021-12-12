import React from "react";
function GiftCard({ imgURL, title }) {
  return (
    <div className="gifts-card">
      <img src={imgURL} alt="" />
      <p className="card-title">{title}</p>
      <button className="border-btn">See More ›</button>
    </div>
  );
}

export default GiftCard;
