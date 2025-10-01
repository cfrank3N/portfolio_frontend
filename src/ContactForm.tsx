import { Container, Col, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MyContactForm() {    
    return (
        <Container className='mt-4'>
            <h2 className='mb-3'>Contact me</h2>
            <Row className='justify-content-center'>
                <Col md={8}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder='Adam Frank'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='your@email.com'></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-2'>Message</Form.Label>
                            <Form.Control as='textarea' rows={4} placeholder='Message...'></Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}