import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function AboutMe() {
  return (
    <>
        <Container>
          <Row className="mb-5">
          </Row>
          <Row>
              <Col col={6} md="6" sm="12" className="d-flex align-items-center">
                  <Image
                      src="/me-on-mountain.jpg"
                      rounded
                      className="shadow mw-100 my-3"
                  ></Image>
              </Col>
              <Col
                  col={6}
                  md="6"
                  sm="12"
                  className="p-3 d-flex align-items-center"
              >     
                  <p className="bg-dark shadow lead border-black border-bottom border-end p-2 rounded mt-3">
                      Hi! This is me, on a mountain in northern Sweden!
                      <br></br>
                      <br></br>I am an aspiring developer fueled by curiosity, translating
                      my passion for exploring the outdoors into a focus on building
                      robust and efficient code. I thrive on tackling technical
                      challenges, always seeking new technologies to create seamless
                      digital experiences.
                      <br></br>
                      <br></br>
                      This portfolio showcases my journey into development, where that
                      same inquisitive spirit is applied to creating meaningful user
                      interactions.
                  </p>
              </Col>
          </Row>
      </Container>
      <Col className='bg-body-tertiary rounded mb-4 mt-5'>&nbsp;</Col>
    </>
  );
}
