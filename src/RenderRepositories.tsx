import { useState, useEffect } from "react";

interface Repository {
    name: string,
    url: string,
    description: string
}


export default function RenderRepositories() {
    const [repos, setRepos] = useState<Repository[]>([]);
    
    useEffect(() => {
        const fetchRepos = async () => {
            const response = await fetch("https://portfolioapiadamfrank.azurewebsites.net/api/repos/pinned");
            const repos: Repository[] = await response.json();
            setRepos(repos);
        };
       fetchRepos();
    }, 
    []);

    const listItems = repos.map(repo =>
        <li key={repo.name}>
            <a href={repo.url} target="blank">{repo.name}</a>
            
        </li>
    );

   return (
    <ul>{listItems}</ul>
   )
}