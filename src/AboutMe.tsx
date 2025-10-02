import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function AboutMe() {
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col col={6}>
                    <Image src='/me-on-mountain.jpg' rounded className='shadow'></Image>
                </Col>
                <Col col={6} className='d-flex align-items-center'>
                    
                    <p className='border-bottom p-2'>Hi, this is me on a mountain in northern Sweden!
                        Driven by curiosity and a love for exploring the world around me, 
                        I am an aspiring developer focused on building intuitive and efficient solutions. 
                        Just as I enjoy navigating new trails in the outdoors, 
                        I thrive on tackling complex problems in code, 
                        constantly seeking out new technologies and innovative approaches to expand my skillset. 
                        This portfolio showcases my journey into development, 
                        where that same inquisitive spirit is applied to creating and improving digital experiences.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}