import React from 'react';
import ProjectCard from './ProjectCard';
import {useState} from 'react';

const LandingPage = ({projects, onHandleSearch}) => {
    // add search input area to handleSearch
    // make each project a ProjectCard component
    const [deletedProjects, setDeletedProjects] = useState(projects);
    const handleDelete = (projectId) => {
        const updatedProjects = projects.filter((project) => project.id !== projectId);
        setDeletedProjects(updatedProjects);
        alert('Project has been deleted');
    };
    return (
        <div className="LandingPage">
            <form type="search" onSearch={onHandleSearch}>
                <input type="text" placeholder="Search projects"></input>
                <button class="btn btn-primary" type="submit">Search</button>
            </form>
            <div className="project-list">
                <div className="project-list-header">
                    <h2>Project Showcase</h2>
                </div>
                <ul>
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} onHandleDelete={handleDelete}/>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default LandingPage;