import react from 'react';

const ProjectCard = ({project, onHandleDelete, onHandleAddNewProjects}) => {
    return (
        <div className="card">
                <img src={project.image} alt={project.name} id='card-image'></img>
            <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.url} className="btn btn-primary">View Project</a> 
                    <button className="btn btn-danger" onClick={(e) => onHandleDelete(project.id, e)}>Delete Project</button>
            </div>
        </div>
    )
};

export default ProjectCard;