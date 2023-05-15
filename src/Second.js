import React from "react";
import Homepage from "./Homepage";
import img2 from "./img/2.jpg";

function Second() {
  return (
    <div className="Second">
      <div className="image">
        <img src={img2} alt="image2"></img>
      </div>

      <Homepage
        src={img2}
        location="상하이, 중국"
        rating="4.67 ⭐"
        distance="870km 거리"
        date="6월 8일~13일"
        price="177,052원 /박"
      />
    </div>
  );
}

export default Second;
