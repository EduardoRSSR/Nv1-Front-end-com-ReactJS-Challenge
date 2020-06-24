import React, {useState, useEffect} from "react";

import "./styles.css";

import api from "./services/api"



function App() {
  const [repositories, setRepositories] = useState([])
  // useEffect -> primeiro parâmetro: função a ser disparada / segundo parâmetro: quando essa função será disparada 
  useEffect(() => {
      api.get('/repositories').then(response=>{
          setRepositories(response.data);
      })
  }, [])


  async function handleAddRepository() {

    const url = (document.getElementById('repoUrl').value);
    const title = document.getElementById('repoTitle').value;
    const techs= document.getElementById('repoTechs').value;

    const response = await api.post('/repositories', {
        url,//: '',
        title,//: `Novo projeto ${Date.now()}`,
        techs//: ["Node", "Express", "TypeScript"]
      }
    )
  
    const repo = response.data;
    setRepositories([...repositories, repo])
  }

  async function handleRemoveRepository(id) {
  
  const response = await api.delete(`/repositories/${id}`)

  const repoIndex = repositories.findIndex(repo => repo.id === id);
  repositories.splice(repoIndex, 1);

  console.log(repositories)
  setRepositories([...repositories])
  }

  return (
    <div id='sect'>
      <ul data-testid="repository-list">
        
      {repositories.map(repo => {
        return(
      <li key={repo.id}>

         <div><p>{repo.title}</p>
         <p>{repo.url}</p> 
         <p>{repo.techs}</p> 
         <button onClick={() => handleRemoveRepository(`${repo.id}`)}>
           Remover
          </button>    
         </div>
          
      </li>
      )})   
  }
      </ul>
      <div id='form'>
        <p> Digite o título do repositório:</p>
      <input id='repoTitle'></input>
      <p> Digite a url do repositório: </p>
      <input id='repoUrl'></input>
      <p> Digite as tecnologias utilizadas:</p>
      <input id='repoTechs'></input>
      </div>
      <button type='submit' onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
