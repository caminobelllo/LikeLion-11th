import React from "react";
import Homepage from "./Homepage";
import img1 from "./img/1.jpg";

function First(props) {
  return (
    <div className="First">
      <div className="image">
        <img src={img1} alt="image1"></img>
      </div>
      <Homepage
        src={img1}
        location="상하이, 중국"
        rating="4.96 ⭐"
        distance="869km 거리"
        date="6월 8일~14일"
        price="68,191원 /박"
      />
    </div>
  );
}

export default First;
