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
    <Col sm="12" md="6" lg="4" key={repo.name}>
      <Card border="secondary" className="mt-4 border- shadow rounded-4">
        <Row>
          <Col sm="4">
            <Card.Img
              variant="top"
              className="w-50 mx-auto d-block mb-3"
              src="/github-mark-white.svg"
            />
          </Col>
          <Col sm="8">
            <Card.Body className="p-0">
              <Card.Header className="rounded p-1">
                <Card.Title>{repo.name}</Card.Title>
              </Card.Header>
            </Card.Body>
          </Col>
        </Row>
        <Row>
          <Accordion className="mb-3">
            <Accordion.Item className="bg-dark mt-3" eventKey="0">
              <Accordion.Header>Description</Accordion.Header>
              <Accordion.Body>{repo.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button href={repo.url} target="blank" variant="outline-success">
              Visit repository
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  ));

  return (
    <Container id="my-projects" fluid className="border-bottom rounded-bottom">
      <h2>My projects</h2>
      <Row className="mb-5">{repoCards}</Row>
    </Container>
  );
}
