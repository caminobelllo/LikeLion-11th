import React from "react";
import Homepage from "./Homepage";
import img3 from "./img/3.jpg";

function Third(props) {
  return (
    <div className="Third">
      <div className="image">
        <img src={img3} alt="image3"></img>
      </div>
      <Homepage
        src={img3}
        location="제주시, 한국"
        rating="4.97 ⭐"
        distance="466km 거리"
        date="9월 2일~8일"
        price="720,134원 /박"
      />
    </div>
  );
}

export default Third;
