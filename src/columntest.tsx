import { Container, Col, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ColumnTest() {    
    return (
        <Container fluid='md'>
            <Row>
                <Col md>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='input'></Form.Control>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password'></Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}