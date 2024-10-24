import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Crypto from '../../Assets/ProjectsImage/Screenshot 2024-10-24 225556.png'
import Ecandidate from '../../Assets/ProjectsImage/Screenshot 2024-10-24 223416.png'
import FurniFlex from '../../Assets/ProjectsImage/Screenshot 2024-10-24 232202.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FurniFlex}
            //   isBlog={false}
              title="FurniFlex Web"
              description="I developed a comprehensive sales invoice web application that achieved an 85% improvement in operational efficiency, 90% reduction in manual processes, 90% increase in data security, and 100% user-friendly experience. The system integrates customer order management, invoice generation, and payment tracking, with a robust user authentication system."
              ghLink="https://github.com/SohelTechnicalDeveloper/New-Furniflex.git"
              demoLink="https://github.com/SohelTechnicalDeveloper/New-Furniflex.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecandidate}
            //   isBlog={false}
              title="E-Candidate"
              description="I developed this project for the e candidate using frontend and backend skills in this project and expand my knowledge and skills ."
              ghLink="https://github.com/SohelTechnicalDeveloper/DollopProject1Frontend.git"
              demoLink="https://dollop-project1-frontend.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crypto}
              title="Cryptobase Currency"
              description="I successfully developed Cryptobase, a fully responsive cryptocurrency platform, leveraging modern frontend skills and frameworks to deliver a seamless user experience across devices. This project demonstrates my ability to build scalable, efficient, and user-friendly applications in the fast-paced world of blockchain technology."
              ghLink="https://github.com/SohelTechnicalDeveloper/Cryptobase-bootstrap-5.3.git"
              demoLink="https://cryptobase-bootstrap-5-3.vercel.app/"
            />
          </Col>

         

          

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
