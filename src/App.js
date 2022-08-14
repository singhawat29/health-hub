import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState } from "react";
import MyRoute from "./MyRoute";
import {
  Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Relation from "./components/Relation";

function App() {
  const [isModalNotification, setIsModalNotification] = useState(false);

  const showModal = () => {
    setIsModalNotification(true);
  };

  const handleOk = () => {
    setIsModalNotification(false);
  };

  const handleCancel = () => {
    setIsModalNotification(false);
  };

  return <div className="App"></div>;
}

export default App;
