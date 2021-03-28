import logo from "./logo.svg";
import "./App.css";
import { Row, Col } from "reactstrap";
import Background from "./img/keyboard.jpg";
import Background2 from "./img/keyboardtwo.jpg";
import Background3 from "./img/keyboardthree.jpg";
import Background4 from "./img/keyboardfour.jpg";
import Background5 from "./img/keyboardfive.jpg";
import Background6 from "./img/software.jpg";
import Background7 from "./img/softwaretwo.jpg";
import Background8 from "./img/code.jpg";
import Background9 from "./img/computer.jpg";
import Example from "./Example";

//var gifimg = require("./imgfolder/spinningtwo.gif").default;

function App() {
  return (
    <div>
      <Row className="primary">
        <Col md={{ offset: 6, size: 2 }} sm={{ offset: 0, size: 3 }}>
          About Me
        </Col>
        <Col md="2" sm="3">
          Projects
        </Col>
        <Col md="2" sm="3">
          Contact Me
        </Col>
        BENJAMIN PERKINS
      </Row>
      <Row
        className="secondary"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1>ABOUT ME</h1>
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
          <h6>• React, Redux, JavaScript, Python, Java, HTML, CSS, XML</h6>
          <h6>
            • MongoDB, SQL, Mongoose, Express,
            <h6>• GitHub, Heroku, Netlify, Visual Studio </h6>
          </h6>
          <h6>• FIX Protocol, PowerShell, FTP, TFS, JIRA</h6>
        </Col>
      </Row>
      <Row className="primary">
        <h1>PROJECTS</h1>
        <Example />
      </Row>
      <Row
        className="secondary"
        style={{
          backgroundImage: `url(${Background4})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></Row>
      <Row className="primary">
        <h1>CONATACT ME</h1>
        <Col md="9" sm="0"></Col>
        <Col>About Me</Col>
        <Col>Projects</Col>
        <Col>Contact Me</Col>
      </Row>
      <Row
        className="secondary"
        style={{
          backgroundImage: `url(${Background2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Col md="9" sm="0"></Col>
        <Col>About Me</Col>
        <Col>Projects</Col>
        <Col>Contact Me</Col>
      </Row>
      <Row
        className="secondary"
        style={{
          backgroundImage: `url(${Background3})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Col md="9" sm="0"></Col>
        <Col>About Me</Col>
        <Col>Projects</Col>
        <Col>Contact Me</Col>
      </Row>
      <Row
        className="secondary"
        style={{
          backgroundImage: `url(${Background4})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Col md="9" sm="0"></Col>
        <Col>About Me</Col>
        <Col>Projects</Col>
        <Col>Contact Me</Col>
      </Row>
      <Row
        className="secondary"
        style={{
          backgroundImage: `url(${Background5})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Col md="9" sm="0"></Col>
        <Col>About Me</Col>
        <Col>Projects</Col>
        <Col>Contact Me</Col>
      </Row>
      <Row
        className="secondary"
        style={{
          backgroundImage: `url(${Background6})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Col md="9" sm="0"></Col>
        <Col>About Me</Col>
        <Col>Projects</Col>
        <Col>Contact Me</Col>
      </Row>
      <Row
        className="secondary"
        style={{
          backgroundImage: `url(${Background7})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Col md="9" sm="0"></Col>
        <Col>About Me</Col>
        <Col>Projects</Col>
        <Col>Contact Me</Col>
      </Row>
      <Row
        className="secondary"
        style={{
          backgroundImage: `url(${Background8})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Col md="9" sm="0"></Col>
        <Col>About Me</Col>
        <Col>Projects</Col>
        <Col>Contact Me</Col>
      </Row>
      <Row
        className="secondary"
        style={{
          backgroundImage: `url(${Background9})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Col md="9" sm="0"></Col>
        <Col>About Me</Col>
        <Col>Projects</Col>
        <Col>Contact Me</Col>
      </Row>
    </div>
  );
}

export default App;
