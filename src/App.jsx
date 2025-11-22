import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Components/LandingPage'
import ProjectForm from './Components/ProjectForm'
import projects from './projects'

function App() {
  // be able to search through projects via text
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // create array of items that were searched
  // filter projects based on search term
  const projectsToDisplay = projects.filter((project) => {
      if (!search) {
          return true;
      };
      return new RegExp(search, 'i').test(project.name)
  });

  // add new projects
  // set up ternary operation 
  const [currentProjects, setProjects] = useState(projects);
  const addNewProjects = (projectToAdd, e) => {
    // check if project already exists
    const projectExists = currentProjects.some(currentProject => {
      return currentProject.id === projectToAdd.id
      });
    // if project does not exist add to projects array
    if (!projectExists) {
      setProjects((previousProjects) => [...previousProjects, projectToAdd]);
    };
  };
  
  return (
    <div className="react-portfolio">
      <h1>Personal Project Showcase App</h1>
      <LandingPage projects={projectsToDisplay} onHandleSearch={handleSearch}/>
      <ProjectForm onHandleAddNewProjects={addNewProjects}/>
    </div>
  )
};

export default App
