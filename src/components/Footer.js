import React from "react";
import "./Footer.css";
import report from "../icon/carbon_report.svg";
import Group from "../icon/Group.svg";
import logo_HealthHub from "../icon/Logo_HealthHubBlack.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <Router>
      <div className="mobile-footer">
        <div className="mobile-container-footer">
          <div className="mobile-header-con-footer">
            <div className="mobile-report">
              {" "}
              <Link to="/Profile">
                <img src={report} alt="report" />
              </Link>
            </div>
            <div className="mobile-logo">
              {" "}
              <Link to="/">
                <img src={logo_HealthHub} alt="logo" />
              </Link>
            </div>
            <div className="mobile-Group">
              {" "}
              <Link to="/Relation">
                <img src={Group} alt="Group" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Footer;
