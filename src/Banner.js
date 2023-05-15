import React from "react";
import "./Banner.css";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Banner() {
  return (
    <div className="banner">
      <div className="logo">
        <a href="localhost:3000">
          <img src={logo} alt="logo"></img>
        </a>
      </div>
      <div className="search">
        <span id="search">어디든지</span>
        <span id="search">언제든 일주일</span>
        <span id="guest">게스트 추가</span>
        <span id="icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>

      <div className="user">
        <div className="createSpace">당신의 공간을 에어비앤비하세요</div>
        <div className="lang">
          <FontAwesomeIcon icon={faGlobe} />
        </div>
        <div className="mypage">
          <span id="bars">
            <FontAwesomeIcon icon={faBars} />
          </span>
          <span id="usericon">
            <FontAwesomeIcon icon={faCircleUser} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
