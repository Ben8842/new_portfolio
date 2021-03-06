import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Button } from "reactstrap";
import Background from "./img/keyboard.jpg";
import Background2 from "./img/keyboardtwo.jpg";
import Background3 from "./img/keyboardthree.jpg";
import Background4 from "./img/keyboardfour.jpg";
import Background5 from "./img/keyboardfive.jpg";
import Background6 from "./img/software.jpg";
import Background7 from "./img/softwaretwo.jpg";
import Background8 from "./img/code.jpg";
import Background9 from "./img/computer.jpg";
import Slides from "./Slides";
import Diamond from "./components/Diamond.js";
import Project from "./components/Project.js";
import Bar from "./components/Bar.js";
import { Link } from "react-scroll";
import React, { Component } from "react";
//import ReactCSSTransitionGroup from "react-transition-group";
//import ReactTransitionGroup from "react-addons-transition-group";

//var gifimg = require("./imgfolder/spinningtwo.gif").default;
/*  <div id="mazedecor2">
          <Diamond pixelSize="sml" height="10" />
        </div>
        <div id="mazedecor3">
          <Diamond pixelSize="sml" height="10" />
        </div>
        <div id="mazedecor4">
          <Diamond pixelSize="sml" height="10" />
        </div> */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutFlag: false,
      contactFlag: false,
      projectFlag: false,
      homeFlag: false,
    };
  }

  linkingA() {
    console.log(this.state);
    this.setState({
      aboutFlag: true,
      projectFlag: false,
      homeFlag: false,
      contactFlag: false,
    });
  }
  linkingH() {
    console.log(this.state);
    this.setState({
      aboutFlag: false,
      projectFlag: false,
      homeFlag: true,
      contactFlag: false,
    });
  }
  linkingP() {
    console.log("linking");
    this.setState({
      aboutFlag: false,
      projectFlag: true,
      homeFlag: false,
      contactFlag: false,
    });
  }
  linkingC() {
    console.log("linking");
    this.setState({
      aboutFlag: false,
      projectFlag: false,
      homeFlag: false,
      contactFlag: true,
    });
  }

  render() {
    var { homeFlag, aboutFlag, projectFlag, contactFlag } = this.state;
    const aboutMaze = (
      <div id="mazedecor5">
        <Diamond pixelSize="sml" height="10" />
      </div>
    );

    const contactMaze = (
      <div>
        <div id="mazedecor4">
          <Diamond pixelSize="sml" height="10" />
        </div>
      </div>
    );

    const projectMaze = (
      <div id="mazedecor3">
        <Diamond pixelSize="sml" height="10" />
      </div>
    );

    const homeMaze = (
      <div id="mazedecor2">
        <Diamond pixelSize="sml" height="10" />
      </div>
    );
    return (
      <div>
        <div className="top">
          <ul
            className="top"
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "center",
            }}
          >
            <li
              style={{
                padding: "10px",
              }}
            >
              <Link
                to="about"
                spy={false}
                smooth={true}
                onClick={() => this.linkingA()}
              >
                About
              </Link>
            </li>
            <li
              style={{
                padding: "10px",
              }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                onClick={() => this.linkingC()}
              >
                Contact
              </Link>
            </li>
            <li
              style={{
                padding: "10px",
              }}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                onClick={() => this.linkingP()}
              >
                Projects
              </Link>
            </li>
            <li
              style={{
                padding: "10px",
              }}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                onClick={() => this.linkingH()}
              >
                Home
              </Link>
            </li>
          </ul>
          <div id="mazedecor0">
            <Bar pixelSize="sml" height="5" width="75" />
          </div>
          <div id="mazedecor00">
            <Bar pixelSize="sml" height="5" width="75" />
          </div>

          {aboutFlag ? aboutMaze : null}
          {contactFlag ? contactMaze : null}
          {homeFlag ? homeMaze : null}
          {projectFlag ? projectMaze : null}
        </div>
        <div
          id="home"
          className="secondary"
          style={{
            backgroundImage: `url(${Background5})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1>Benjamin Perkins</h1>

          <h3>Developer</h3>
        </div>
        <div
          id="about"
          className="secondary"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1>ABOUT</h1>
          {aboutMaze}
          <Col md="9" sm="0"></Col>
          <Col>
            <h6>Name: Benjamin Perkins</h6>
            <h6>Contact: perkinsben@yahoo.com </h6>
            <h6>Status: Open for employment.</h6>
            <h6>
              Education:{" "}
              <a id="edu" href="https://deepdiveeducation.com/">
                Deep Dive Learning Academy
              </a>
            </h6>

            <h6> Skills: </h6>
            <h6>??? React, Redux, JavaScript, Python, Java, HTML, CSS, XML</h6>
            <h6>
              ??? MongoDB, SQL, Mongoose, Express,
              <h6>??? GitHub, Heroku, Netlify, Visual Studio </h6>
            </h6>
            <h6>??? FIX Protocol, PowerShell, FTP, TFS, JIRA</h6>
          </Col>
        </div>
        <div className="primary" id="projects">
          <h1>PROJECTS</h1>
          <Project />
        </div>
        <div
          id="contact"
          className="secondary"
          style={{
            backgroundImage: `url(${Background2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1>CONTACT</h1>
          <h6>Email: perkinsben@yahoo.com</h6>

          <div class="bpad">
            <Button color="secondary">
              <a href="https://github.com/Ben8842">GitHub Profile</a>
            </Button>
          </div>
          <div class="bpad">
            <Button color="secondary">
              <a href="https://www.linkedin.com/in/ben-perkins-91262b16">
                Linkedin Profile
              </a>
            </Button>
          </div>
          <div class="bpad">
            <h6>Schedule a Zoom meeting with me here:</h6>
            <Button color="secondary">
              <a href="https://calendly.com/perkinsben">
                Calendly.com/perkinsben
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//  <Slides />
