import Profile from "./components/Profile";
import Home from "./components/Home";
import Relation from "./components/Relation";
import React from "react";
import "./App.css";
import {
  Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function MyRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Profile" exact element={<Profile />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/Relation" exact element={<Relation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoute;
