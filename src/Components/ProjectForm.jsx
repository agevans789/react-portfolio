import React from "react"

const ProjectForm = ({projects, handleSubmit}) => {
    // input area for adding new projects 
    return (
        <div className="ProjectForm">
            <form onSubmit={handleSubmit}>
                <input type="text" class="form-control" placeholder="Project Name"></input>
                <input type="url" class="form-control" placeholder="Project URL"></input>
                <textarea type="text" class="form-control"></textarea>
                <button class="btn btn-primary" type="submit">Add Project</button>
            </form>
        </div>
    );
};

export default ProjectForm;