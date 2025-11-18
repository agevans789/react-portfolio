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
  const [previousProjects, setProjects] = useState(projects);
  const addNewProjects = (projectToAdd) => {
    // check if project already exists
    const projectExists = previousProjects.some(previousProject=> {
      return previousProject.id === projectToAdd.id
      });
    // if project does not exist add to projects array
    if (!projectExists) {
      setProjects([...projects, projectToAdd]);
    };
  };
  // submit this new list of products to be displayed when button is clicked
  // pass event and data to add as arguments
    const handleSubmit = (e, newProject) => {
      // asynchronous
      e.preventDefault();
      // on submit the function that adds new projects will run
      addNewProjects(newProject);
    };
  return (
    <div className="react-portfolio">
      <h1>Personal Project Showcase App</h1>
      <LandingPage projects={projectsToDisplay} handleSearch={handleSearch}/>
      <ProjectForm handleSubmit={handleSubmit}/>
    </div>
  )
};

export default App
