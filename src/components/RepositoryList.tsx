import { useState, useEffect } from "react";
import { RepositoryItem } from "./RespositoryItem";

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;    
}

export function RespositoryList(){
  const [ repositories, setRepositories ] = useState<Repository[]>([]);
  
  useEffect(() => {
    fetch('https://api.github.com/users/luckmenez/repos')
      .then(response => response.json())
      .then(repositories => setRepositories(repositories));
  }, []);


  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  );
}