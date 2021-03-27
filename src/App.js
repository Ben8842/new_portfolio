import logo from "./logo.svg";
import "./App.css";
import { Row, Col } from "reactstrap";
import Background from "./img/keyboard.jpg";

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
    </div>
  );
}

export default App;
