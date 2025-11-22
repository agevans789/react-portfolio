import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../Components/ProjectCard";

// sample project data for testing
const sampleProject = {
  id: 1,
  name: "Test Project",
  description: "This is a test project.",
  link: "http://example.com"
};

// test that ProjectCard displays project details correctly
test("ProjectCard displays project details", () => {
  render(<ProjectCard project={sampleProject} />);
  
  // check for project name
  const projectName = screen.getByText(/Test Project/i);
  expect(projectName).toBeInTheDocument();
  
  // check for project description
  const projectDescription = screen.getByText(/This is a test project./i);
  expect(projectDescription).toBeInTheDocument();
  
  // check for project link
  const projectLink = screen.getByText(/View Project/i);
  expect(projectLink).toBeInTheDocument();
  expect(projectLink).toHaveAttribute('href', 'http://example.com');
});
