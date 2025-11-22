import React from "react"
import { useState } from "react";
import { v4 } from "uuid";

const ProjectForm = ({projects, onHandleAddNewProjects}) => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    // input area for adding new projects 
    // submit this new list of products to be displayed when button is clicked
  // pass event and data to add as arguments
    const handleSubmit = (e, newProject) => {
      // asynchronous
      // on submit the function that adds new projects will run
      if (onHandleAddNewProjects) {
        onHandleAddNewProjects({
            id: v4(),
            name: name,
            url: url,
            image: image,
            description: description
        }, e)
      };
      setName('');
      setUrl('');
      setImage('');
      setDescription('');
    };
    return (
        <div className="ProjectForm">
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="Project Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type="text" className="form-control" placeholder="Project URL" value={url} onChange={(e) => setUrl(e.target.value)}></input>
                <input type="text" className="form-control" placeholder="Project Image URL" value={image} onChange={(e) => setImage(e.target.value)}></input>
                <textarea type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button className="btn btn-primary" type="submit">Add Project</button>
            </form>
        </div>
    );
};

export default ProjectForm;