import { useState, useEffect } from "react";
import { Alert, Container, Col, Row, Card, Button, Accordion } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

interface Repository {
    name: string,
    url: string,
    description: string
}


export default function RenderRepositories() {
    const [error, setError] = useState();
    const [repos, setRepos] = useState<Repository[]>([]);
    
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("https://portfolioapiadamfrank.azurewebsites.net/api/repos/pinned");
                const repos: Repository[] = await response.json();
                setRepos(repos);
            } catch (e: any) {
                setError(e);
            }
        };
       fetchRepos();
    }, 
    []);

    if (error) {
        return <Alert variant="warning">Couldn't fetch data</Alert>
    }

    const repoCards = repos.map(repo =>
        <Col sm="12" md="6" lg="4" key={repo.name}>
            <Card border="secondary" className="mt-4 border- shadow">

                <Card.Img variant="top" className="w-50 mx-auto d-block" src="/github-mark.svg"/>
                <Card.Body>
                    <Card.Header>
                        <Card.Title>
                            {repo.name}
                        </Card.Title>
                    </Card.Header>
                    
                    <Accordion className="mb-3 rounded-bottom">
                        <Accordion.Item className="bg-dark mt-3" eventKey="0">
                            <Accordion.Header>Description</Accordion.Header>
                            <Accordion.Body>
                                {repo.description}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Button href={repo.url} target="blank" variant="outline-success">Visit repository</Button>
                </Card.Body>
            </Card>
        </Col>
        
        
    );

   return (
    <Container fluid>
        <h2>My projects</h2>
        <Row >
            {repoCards}
        </Row>
    </Container>
   )
}