import React from "react";
import "./Home.css";
import Rate from "../img/Rectangle_111.png";

function Home() {
  return (
    <div className="banner-bg">
      <div className="container-home">
        <h4>อัตราการเต้นหัวใจ</h4>
        <img src={Rate} alt="Group" />
        <h5>ขณะนี้ 94 bpm</h5>
        <h5>วันนี้ 76-121 bpm</h5>
      </div>
      <div className="container-home">
        <h4>ออกซิเจนในเลือด</h4>
        <h5>97%</h5>
      </div>
      <div className="container-home">
        <h4>น้ำหนัก</h4>
        <h5>59kg</h5>
      </div>
      <div className="container-home">
        <h4>ความดัน</h4>
        <h5>120/80 mmHg</h5>
      </div>
      <div className="container-home">
        <h4>น้ำตาลในเลือด</h4>
        <h5>84 mg/dL</h5>
      </div>
    </div>
  );
}

export default Home;
