import {
  Container,
  Col,
  Row,
  Form,
  Button,
  type AlertProps,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function MyContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [contactFormAlertShow, setContactFormAlertShow] = useState(false);
  const [contactFormVariant, setContactFormVariant] = useState("");
  const [contactFormContent, setContactFormContent] = useState("");

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();

    const postMessageToBackend = async () => {
      const response = await fetch(
        "https://portfolioapiadamfrank.azurewebsites.net/api/savemessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sendername: name,
            senderemail: email,
            content: message,
          }),
        }
      );

      if (response.ok) {
        setContactFormVariant("success");
        setContactFormContent("Thank you for contacting me!");
      } else {
        setContactFormVariant("danger");
        setContactFormContent("Something went wrong. Please check that you filled out all of the fields correctly.");
      }
    };

    setName("");
    setEmail("");
    setMessage("");

    setContactFormVariant("info");
    setContactFormContent("Sending email...");
    setContactFormAlertShow(true);
    
    postMessageToBackend();
  };

  return (
    <Container id="contact-me" className="mt-4">
      <h2 className="mb-3">Contact me</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={sendMessage}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your name"
                className="shadow"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="your@email.com"
                className="shadow"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-2">Message</Form.Label>
              <Form.Control
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                as="textarea"
                rows={4}
                placeholder="Message..."
                className="shadow"
              ></Form.Control>
            </Form.Group>
            <Button className="mt-3" variant="outline-success" type="submit">
              Send Message
            </Button>
            <ContactFormAlert
              show={contactFormAlertShow}
              variant={contactFormVariant}
              onClose={() => setContactFormAlertShow(false)}
              content={contactFormContent}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

function ContactFormAlert({ show, onClose, variant, content }: AlertProps) {
  return (
    <Alert
      className="mt-3"
      show={show}
      variant={variant}
      onClose={onClose}
      dismissible
    >
      {content}
    </Alert>
  );
}
