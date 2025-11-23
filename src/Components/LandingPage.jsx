import React from 'react';
import ProjectCard from './ProjectCard';
import {useState} from 'react';

const LandingPage = ({projects, onHandleSearch, searchTerm, onHandleDelete}) => {
    return (
        <div className="LandingPage">
            <form type="search" onSubmit={onHandleSearch} value={searchTerm} aria-label="Large" aria-describedby="inputGroup-sizing-lg">
                <input type="text" id="search-input" placeholder="Search projects" value={searchTerm} onChange={onHandleSearch}></input>
            </form>
            <div className="project-list">
                <div className="project-list-header">
                    <h2>Project Showcase</h2>
                </div>
                <ul>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} onHandleDelete={onHandleDelete}/>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default LandingPage;