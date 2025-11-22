import react from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// check that LandingPage displays search form and project list
test('LandingPage displays search form and project list', () => {
  render(<App />);
  
  // check for search input
  const searchInput = screen.getByPlaceholderText(/Search projects/i);
  expect(searchInput).toBeInTheDocument();
  
  // check for project list header
  const projectListHeader = screen.getByText(/Project Showcase/i);
  expect(projectListHeader).toBeInTheDocument();
});

// check that searching filters projects correctly
test('searching filters projects correctly', () => {
  render(<App />);
  
  const searchInput = screen.getByPlaceholderText(/Search projects/i);
  
  // simulate user typing in search input
  fireEvent.change(searchInput, { target: { value: 'Test Project' } });
  
  // check that only matching projects are displayed
  const displayedProjects = screen.getAllByRole('listitem');
  displayedProjects.forEach(project => {
    expect(project.textContent).toMatch(/Test Project/i);
  });
});

// check that adding a new project updates the project list
test('adding a new project updates the project list', () => {
  render(<App />);
  
  const initialProjectCount = screen.getAllByRole('listitem').length;
  
  // simulate adding a new project via ProjectForm
  const nameInput = screen.getByPlaceholderText(/Project Name/i);
  const descriptionInput = screen.getByPlaceholderText(/Project Description/i);
  const addButton = screen.getByText(/Add Project/i);
  
  fireEvent.change(nameInput, { target: { value: 'New Test Project' } });
  fireEvent.change(descriptionInput, { target: { value: 'This is a test project.' } });
  fireEvent.click(addButton);
  
  const updatedProjectCount = screen.getAllByRole('listitem').length;
  expect(updatedProjectCount).toBe(initialProjectCount + 1);
  
  // check that the new project is displayed
  const newProject = screen.getByText(/New Test Project/i);
  expect(newProject).toBeInTheDocument();
});