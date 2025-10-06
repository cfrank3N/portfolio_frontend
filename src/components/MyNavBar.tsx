import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Image, Col } from "react-bootstrap";

export default function MyNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="sm-6">
        <Col className="d-flex justify-content-left align-items-center">
          <Navbar.Brand href="/">Adam Frank</Navbar.Brand>
          <Nav.Link
            className="me-3"
            href="https://github.com/cfrank3N"
            target="blank"
          >
            {" "}
            <Image width={25} src="/github-mark-white.svg"></Image>{" "}
          </Nav.Link>
          <Nav.Link
            className="me-3"
            href="https://www.linkedin.com/in/adam-frank-5226961b6/"
            target="blank"
          >
            {" "}
            <Image width={25} src="/linkedin-mark-white.svg"></Image>{" "}
          </Nav.Link>
        </Col>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
