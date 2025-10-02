import { Container, Col, Row, Form, Button, type AlertProps, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';



export default function MyContactForm() {    

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [alertShow, setAlertShow] = useState(false);
    

    const sendMessage = (event: React.FormEvent) => {
        event.preventDefault();
        
            const postMessageToBackend = async () => {

                const response = await fetch("https://portfolioapiadamfrank.azurewebsites.net/api/savemessage", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        sendername: name,
                        senderemail: email,
                        content: message
                    })
                });

                if (response.ok) {
                    setName("");
                    setEmail("");
                    setMessage(""); 
                    setAlertShow(true) 
                } 
            }
        
        postMessageToBackend();
        
    }

    return (
        <Container className='mt-4'>
            <h2 className='mb-3'>Contact me</h2>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <Form onSubmit={sendMessage}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Adam Frank'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='your@email.com'></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-2'>Message</Form.Label>
                            <Form.Control value={message} onChange={(e) => setMessage(e.target.value)} as='textarea' rows={4} placeholder='Message...'></Form.Control>
                        </Form.Group>
                        <Button className='mt-3' type="submit">Send Message</Button>
                        <MessageSentAlert show={alertShow} onClose={() => setAlertShow(false)} />
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

function MessageSentAlert({show, onClose}: AlertProps) {
        return (
            <Alert className='mt-3' show={show} variant="success" onClose={onClose} dismissible>Thank you for contacting me</Alert>
        )
}