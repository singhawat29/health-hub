import React from "react";
import "./Profile.css";
import logo_HealthHub from "../img/LogoText_HealthHub.png";
import Profile1 from "../img/Ellipse_1.png";

function Profile() {
  return (
    <div className="header-Profile">
      <div className="container-Profile">
        <div className="header-con-Profile">
          <div className="logo-container-Profile">
            <img src={logo_HealthHub} alt="logo" />
          </div>
          <img src={Profile1} alt="logo" />
          <h6>นายสวัสดี ปรีชัย </h6>
          <div className="SFAFAFA"></div>
          <div>
            <h3>ข้อมูลส่วนตัว</h3>
            <h6>ชื่อ นายสวัสดี ปรีชัย</h6>
            <h6>เพศ ชาย</h6>
            <h6>วันเกิด 4/3/2501</h6>
            <h6>กรุ๊ปเลือด O</h6>
            <h6>น้ำหนัก 59 kg</h6>
            <h6>สูง 169 cm</h6>
            <h6>โรคประจำตัว ความดันโลหิตสูง</h6>
            <h6>ญาติ นายสิงหวัชร์ ธรรมสาโร</h6>
            <h6>เบอร์ญาติ 0810038022</h6>
            <h6>ID Line ญาติ wangtrombond</h6>
            <h6>เบอร์ญาติ2 0853223910</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
