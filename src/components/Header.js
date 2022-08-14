import React, { useState, useEffect } from "react";
import "./Header.css";
import "antd/dist/antd.css";
import { FiMenu, FiX } from "react-icons/fi";
import logo_HealthHub from "../img/LogoText_HealthHub.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { css } from "@emotion/css";
import { Modal, Input } from "antd";
import { google, db } from "../firebase";
import flat_color_icons_google from "../img/flat-color-icons_google.svg";
import Profile from "../img/Ellipse_1.png";
import notification from "../icon/ci_notification-outline.svg";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
} from "firebase/auth";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [createModalRegister, setcreateModalRegister] = useState(false);
  const [createProfile, setCreateProfile] = useState(false);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [profile, setProfile] = useState();
  const [isModalNotification, setIsModalNotification] = useState(false);

  const fetchProfile = async () => {
    const data = await getDocs(collection(db, "profile"));
    //console.log(data);
    data.forEach((doc) => {
      console.log(doc.data());
    });
  };

  //const createProfile = async (tx) => {};

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (data) => {
      setUsername(data);
      console.log("data", data);
    });
    fetchProfile();
  }, []);

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-con">
            <div className="logo-container">
              <Link to="/">
                <img src={logo_HealthHub} alt="logo" />
              </Link>
            </div>
            <ul className={click ? "menu active" : "menu"}>
              <li className="menu-link" onClick={closeMobileMenu}>
                <Link to="/">Home</Link>
              </li>
              <li className="menu-link" onClick={closeMobileMenu}>
                <Link to="/Profile">Profile</Link>
              </li>
              <li className="menu-link" onClick={closeMobileMenu}>
                <Link to="/Relation">Relation</Link>
              </li>
            </ul>
            {username ? (
              <div>
                {username.displayName}
                <button
                  className={css`
                    margin-left: 10px;
                    color: #fafafa;
                  `}
                  onClick={() => {
                    setCreateProfile(true);
                  }}
                >
                  Profile
                </button>
                <button
                  className={css`
                    margin-left: 10px;
                    color: #fafafa;
                  `}
                  onClick={async () => {
                    const auth = getAuth();
                    const response = await signOut(auth);
                    console.log(response);
                    setUsername();
                  }}
                >
                  ออกจากระบบ
                </button>
              </div>
            ) : (
              <button
                className={css`
                  font-family: Kanit;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 21px;
                  line-height: 31px;
                  color: #fafafa;
                `}
                onClick={() => {
                  setCreateModalVisible(true);
                }}
              >
                Sign in
              </button>
            )}
            <div className="mobile-menu" onClick={handleClick}>
              {click ? <FiX /> : <FiMenu />}
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}
      <div className="mobile-header">
        <div className="mobile-container">
          <div className="mobile-header-con">
            <div className="mobile-profile">
              {" "}
              <Link to="/Profile">
                <img src={Profile} alt="Profile" />
              </Link>
            </div>
            <div className="mobile-logotext">
              {" "}
              <Link to="/">
                <img src={logo_HealthHub} alt="logo" />
              </Link>
            </div>
            <div className="mobile-notification">
              <img
                src={notification}
                alt="logo"
                onClick={() => {
                  setIsModalNotification(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        title={null}
        visible={createModalVisible}
        onOk={() => {
          setCreateModalVisible(false);
        }}
        onCancel={() => {
          setCreateModalVisible(false);
        }}
        footer={null}
      >
        {" "}
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <h5
            className={css`
              text-align: center;
            `}
          >
            ล็อกอิน
          </h5>
          <Input
            placeholder="ชื่อผู้ใช้/อีเมล"
            onChange={(e) => {
              setUsername(e.target.value);
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="รหัสผ่าน"
            type="password"
            className={css`
              margin-top: 10px;
            `}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className={css`
              width: 100%;
              margin-top: 20px;
              font-size: 19px;
              color: #fafafa;
            `}
            onClick={() => {
              const auth = getAuth();
              console.log(email);
              console.log(password);
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user.displayName);
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                });
              setCreateModalVisible(false);
            }}
          >
            ล็อกอิน
          </button>
          <button
            className={css`
              width: 100%;
              margin-top: 10px;
              font-size: 19px;
              color: #fafafa;
            `}
            onClick={() => {
              setCreateModalVisible(false);
              setcreateModalRegister(true);
              console.log("12");
            }}
          >
            ลงทะเบียน
          </button>
          <p
            className={css`
              margin-top: 10px;
            `}
          >
            หรือล็อกอินด้วยบัญชีโซเชียลมีเดียดังนี้
          </p>
          <div>
            <button
              className={css`
                padding: 0;
                background-color: #ffffff;
              `}
              onClick={() => {
                const auth = getAuth();
                signInWithPopup(auth, google).then((data) => {
                  console.log(data);
                  setUsername(data.user);
                  setCreateModalVisible(false);
                });
              }}
            >
              <img
                src={flat_color_icons_google}
                alt="flat_color_icons_google"
              ></img>
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        title="การแจ้งเตือน"
        visible={isModalNotification}
        onOk={() => {
          setIsModalNotification(false);
        }}
        onCancel={() => {
          setIsModalNotification(false);
        }}
        footer={null}
      >
        <p>ยังไม่มีรายการ</p>
      </Modal>
    </>
  );
}

export default Header;
