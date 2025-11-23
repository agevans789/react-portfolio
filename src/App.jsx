import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Components/LandingPage'
import ProjectForm from './Components/ProjectForm'
import projects from './projects.js'

function App() {
  // be able to search through projects via text
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    e.preventDefault()
    console.log('Search term updated:', searchTerm);
  };

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
    const handleDelete = (projectID, e) => {
      e.preventDefault();
        const updatedProjects = currentProjects.filter((project) => project.id !== projectID);
        setProjects(updatedProjects);
        console.log('Project deleted:', projectID);
        alert('Project has been deleted');
    };

    // create array of items that were searched
  // filter projects based on search term
  // first filter out deleted projects and filter in current projects
  const projectsToDisplay = currentProjects.filter((currentProject) => {
      if (!search) {
          return true;
      };
      return new RegExp(search, 'i').test(currentProject.name)
  });

    
  return (
    <div className="react-portfolio">
      <h1>Personal Project Showcase App</h1>
      <LandingPage projects={projectsToDisplay} onHandleSearch={handleSearch} searchTerm={search} onHandleDelete={handleDelete} onHandleAddNewProjects={addNewProjects}/>
      <ProjectForm onHandleAddNewProjects={addNewProjects}/>
    </div>
  )
};

export default App
