import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import HomeSection from "./components/HomeSection";
import ResearchSection from "./components/ResearchSection";
import PublicationsSection from "./components/Publications";
import RepositoriesSection from "./components/RepositoriesSection";
import CVSection from "./components/CVSection";
import PersonalSection from "./components/PersonalSection";
import BiographySection from "./components/BiographySection";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <>
      <header>
        <Navbar
          expand="lg"
          bg="primary"
          data-bs-theme="dark"
          className="fixed-top"
          style={{
            background: "linear-gradient(90deg, #003B6F, #E84A27)",
            color: "white",
          }}
        >
          <Container>
            <a className="navbar-brand fw-bold" href="/">
              Matt Lauer
            </a>
            <div>
              <a
                href="#contact"
                className="btn btn-info me-1 mb-1 mb-lg-0 d-inline-block d-lg-none"
              >
                Contact
              </a>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#biography">Biography</Nav.Link>
                <Nav.Link href="#research">Research</Nav.Link>
                <Nav.Link href="#publications">Publications</Nav.Link>
                <Nav.Link href="#repositories">Repositories</Nav.Link>
                <Nav.Link href="#CV">CV</Nav.Link>
                <Nav.Link href="#personal">Personal</Nav.Link>
              </Nav>
              <Nav>
                <a
                  href="#contact"
                  className="btn btn-info me-lg-1 mb-1 mb-lg-0 d-none d-lg-inline-block"
                >
                  Contact
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <ParticlesBackground />
        <HomeSection />
        <BiographySection />
        <ResearchSection />
        <PublicationsSection />
        <RepositoriesSection />
        <CVSection />
        <PersonalSection />
      </main>
      <footer
        className="border-top footer bg-body-secondary"
        style={{ zIndex: "999" }}
      >
        <div className="container">
          <div className="pt-3 fs-6" style={{ paddingBottom: "8rem" }}>
            <small className="font-monospace fw-bold" id="contact">
              © 2024 Matt Lauer
            </small>
            <hr></hr>
            <small>
              Send Matt an email at{" "}
              <a
                href="mailto:mlauer2015@gmail.com"
                className="me-3"
                style={{ textDecoration: "none" }}
              >
                mlauer2015@gmail.com <i className="bi bi-envelope-fill"></i>
              </a>
            </small>
            <br></br>
            <small>
              View his full portfolio on{" "}
              <a
                href="https://github.com/mlau154/"
                style={{ textDecoration: "none" }}
              >
                GitHub <i className="bi bi-github"></i>
              </a>
            </small>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
