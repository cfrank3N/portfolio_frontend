import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

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

    const listItems = repos.map(repo =>
        <li key={repo.name}>
            <a href={repo.url} target="blank">{repo.name}</a>
            
        </li>
    );

   return (
    <ul>{listItems}</ul>
   )
}