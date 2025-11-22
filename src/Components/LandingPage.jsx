import React from 'react';
import ProjectCard from './ProjectCard';
import {useState} from 'react';

const LandingPage = ({projects, onHandleSearch}) => {
    // add search input area to handleSearch
    // make each project a ProjectCard component
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
                        <ProjectCard key={project.name} project={project}/>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default LandingPage;