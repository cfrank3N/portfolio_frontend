import { useState, useEffect } from "react";
import {
  Alert,
  Container,
  Col,
  Row,
  Card,
  Button,
  Accordion,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface Repository {
  name: string;
  url: string;
  description: string;
}

export default function RenderRepositories() {
  const [error, setError] = useState();
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://portfolioapiadamfrank.azurewebsites.net/api/repos/pinned"
        );
        const repos: Repository[] = await response.json();
        setRepos(repos);
      } catch (e: any) {
        setError(e);
      }
    };
    fetchRepos();
  }, []);

  if (error) {
    return <Alert variant="warning">Couldn't fetch data</Alert>;
  }

  const repoCards = repos.map((repo) => (
    <Col sm="6" md="6" lg="4" key={repo.name}>
      <Card border="secondary" className="border-0 mt-4 shadow rounded-4">
        <Card.Body className="p-0">
          <Row className="bg-body-tertiary rounded">
            <Accordion className="mb-3">
              <Accordion.Item className="mt-3" eventKey="0">
                <Accordion.Header>{repo.name}</Accordion.Header>
                <Accordion.Body>{repo.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mt-3">
              <Button href={repo.url} target="blank" variant="outline-success">
                Visit repository
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <>
        <Container
          id="my-projects"
          fluid
        >
          <h2>My projects</h2>
          <Row className="mb-5">{repoCards}</Row>
        </Container>
    </>
  );
}
