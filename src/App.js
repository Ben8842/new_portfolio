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
        <Col md="9" sm="0"></Col>
        <Col>About Me</Col>
        <Col>Projects</Col>
        <Col>Contact Me</Col>
      </Row>
      <Row className="primary">
        <Col md="9" sm="0"></Col>
        <Col>About Me</Col>
        <Col>Projects</Col>
        <Col>Contact Me</Col>
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
