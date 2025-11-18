import React from 'react';
import ProjectCard from './ProjectCard';
import {useState} from 'react';

const LandingPage = ({projects, handleSearch}) => {
    // add search input area to handleSearch
    return (
        <div className="LandingPage">
            <form type="search" onSearch={handleSearch}>
                <input type="text">Search</input>
                <button class="btn btn-primary" type="submit">Search</button>
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} handleSearch={handleSearch}/>
                ))}
            </form>
        </div>
    )
};

export default LandingPage;