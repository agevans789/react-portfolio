import react from 'react';

const ProjectCard = ({project, addNewProject}) => {
    return (
        <div class="card">
            <img src=""></img>
            <div className="card-body">
                <h5 class="card-title">{project.name}</h5>
                <a href="" class="card-link">{project.url}</a>
                <p class="card-text">{project.description}</p>
            </div>
        </div>
    )
};

export default ProjectCard;