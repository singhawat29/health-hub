import { React, useState, useEffect } from "react";
import "./Home.css";
import "antd/dist/antd.css";
import Rate from "../img/Rectangle_111.png";
import Header from "./Header";
import Footer from "./Footer";
import { database } from "../firebase";
import { Input } from "antd";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

function Home() {
  // const db = getDatabase();
  const starCountRef = ref(database, "test/int");
  const dataBPM = ref(database, "test/BPM");
  const dataSpO2 = ref(database, "test/SpO2");

  const [pressure, setPressure] = useState();
  const [weight, setWeight] = useState();
  const [sugar, setSugar] = useState();

  /*onValue(starCountRef, (snapshot) => {
    console.log(snapshot.val());
    document.getElementById("bpmtest").innerHTML =
      "ขณะนี้ " + snapshot.val() + " bpm";
    // setStatus(true);
  });*/
  onValue(dataBPM, (snapshot) => {
    console.log(snapshot.val());
    document.getElementById("bpm").innerHTML =
      "ขณะนี้ " + snapshot.val() + " bpm";
    // setStatus(true);
  });

  onValue(dataSpO2, (snapshot) => {
    console.log(snapshot.val());
    document.getElementById("SpO2").innerHTML = snapshot.val() + "%";
    // setStatus(true);
  });
  // onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
  //   // setValueBPM(valueBPM, data);
  //   // setValueBPM(data);
  //   // console.log(valueBPM);
  //   //updateStarCount(postElement, data);
  // });

  // onValue(dataBPM, (snapshot) => {
  //   BPM = snapshot.val();
  //   // setValueBPM(BPM);
  //   console.log(valueBPM);
  //   //updateStarCount(postElement, data);
  // });
  // onValue(dataSpO2, (snapshot) => {
  //   const SpO2 = snapshot.val();
  //   console.log(SpO2);
  //   //updateStarCount(postElement, data);
  // });
  // onValue(dataLat, (snapshot) => {
  //   const lat = snapshot.val();
  //   console.log(lat);
  //   //updateStarCount(postElement, data);
  // });
  // onValue(dataLng, (snapshot) => {
  //   const lng = snapshot.val();
  //   console.log(lng);
  //   //updateStarCount(postElement, data);
  // });

  return (
    <>
      <Header />
      <div className="App">
        <div className="banner-bg">
          <div className="container-home">
            <h4>อัตราการเต้นหัวใจ</h4>
            <img src={Rate} alt="Group" />
            {/* <h5>ขณะนี้</h5> */}
            <h5 id="bpm"></h5>
            {/* <h5>bpm</h5> */}
            <h5>วันนี้ 76-121 bpm</h5>
          </div>
          <div className="container-home">
            <h4>ออกซิเจนในเลือด</h4>
            <h5 id="SpO2"></h5>
          </div>
          <div className="container-home">
            <h4>น้ำหนัก</h4>
            <div className="container-home-banner">
              <h5>
                {" "}
                <Input
                  placeholder="50"
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
                  className="input-kg"
                />
                kg
              </h5>
              <button>บันทึก</button>
            </div>
          </div>
          <div className="container-home">
            <h4>ความดัน</h4>
            <div className="container-home-banner">
              <h5>
                {" "}
                <Input
                  placeholder="120"
                  onChange={(e) => {
                    setPressure(e.target.value);
                  }}
                  className="input-kg"
                />
                /{" "}
                <Input
                  placeholder="80"
                  onChange={(e) => {
                    setPressure(e.target.value);
                  }}
                  className="input-kg"
                />{" "}
                mmHg
              </h5>
              <button>บันทึก</button>
            </div>
          </div>
          <div className="container-home">
            <h4>น้ำตาลในเลือด</h4>
            <div className="container-home-banner">
              <h5>
                {" "}
                <Input
                  placeholder="84"
                  onChange={(e) => {
                    setSugar(e.target.value);
                  }}
                  className="input-kg"
                />
                mg/dL
              </h5>
              <button>บันทึก</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
