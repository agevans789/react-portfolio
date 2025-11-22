import react from 'react';

const ProjectCard = ({project, onHandleDelete}) => {
    return (
        <div class="card">
                <img src={project.image}></img>
            <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.link} className="btn btn-primary">View Project</a> 
                    <button className="btn btn-danger" onClick={() => onHandleDelete(project.id)}>Delete Project</button>
            </div>
        </div>
    )
};

export default ProjectCard;