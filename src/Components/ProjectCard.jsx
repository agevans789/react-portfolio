import react from 'react';
import {Link} from 'react-router-dom'

const ProjectCard = ({project, addNewProject}) => {
    return (
        <Link to={project.url}>
            <div class="card">
                <img src={project.image}></img>
                <div className="card-body">
                    <h5 class="card-title">{project.name}</h5>
                    <a href={project.url} class="card-link"></a>
                    <p class="card-text">{project.description}</p>
                </div>
            </div>
        </Link>
    )
};

export default ProjectCard;