import React from "react";
import Homepage from "./Homepage";
import img4 from "./img/4.jpg";

function Fourth(props) {
  return (
    <div className="Fourth">
      <div className="image">
        <img src={img4} alt="image4"></img>
      </div>

      <Homepage
        src={img4}
        location="상하이, 중국"
        rating="NEW ⭐"
        distance="888km 거리"
        date="6월 12일~17일"
        price="2,599,290원 /박"
      />
    </div>
  );
}

export default Fourth;
