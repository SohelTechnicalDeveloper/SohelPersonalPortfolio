import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub, FaWindows } from "react-icons/fa";
import { SiVisualstudiocode, SiPostman, SiNetlify } from "react-icons/si";
import { VscDebug } from "react-icons/vsc";
import { SiSublimetext } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <VscDebug />
      </Col>
    </Row>
  );
}

export default Toolstack;
