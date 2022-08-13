import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function Relation() {
    return <h2>Relation</h2>;
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
        <Profile />
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <h1>45</h1>
        <h1>45</h1>
        <h1>45</h1>
        <h1>45</h1>
        <h1>45</h1>
        <Switch>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Relation">
            <Relation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default App;
