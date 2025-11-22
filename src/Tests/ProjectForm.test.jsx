import react from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders the app and performs search', () => {
  render(<App />);
  
  // Check if the main heading is present
  const headingElement = screen.getByText(/Personal Project Showcase App/i);
  expect(headingElement).toBeInTheDocument();
  
  // Check if the search input is present
  const searchInput = screen.getByPlaceholderText(/Search projects/i);
  expect(searchInput).toBeInTheDocument();
  
  // Simulate typing in the search input
  fireEvent.change(searchInput, { target: { value: 'Sample Project' } });
  expect(searchInput.value).toBe('Sample Project');
});

test('adds a new project via ProjectForm', () => {
  render(<App />);
  
  // Get initial count of projects
  const initialProjects = screen.getAllByRole('listitem');
  const initialCount = initialProjects.length;
  
  // Fill out the form to add a new project
  const nameInput = screen.getByPlaceholderText(/Project Name/i);
  const descriptionInput = screen.getByPlaceholderText(/Project Description/i);
  const addButton = screen.getByText(/Add Project/i);
  
  fireEvent.change(nameInput, { target: { value: 'New Project' } });
  fireEvent.change(descriptionInput, { target: { value: 'This is a new project.' } });
  fireEvent.click(addButton);
  
  // Check if the project count has increased
  const updatedProjects = screen.getAllByRole('listitem');
  expect(updatedProjects.length).toBe(initialCount + 1);
  
  // Check if the new project is displayed
  const newProject = screen.getByText(/New Project/i);
  expect(newProject).toBeInTheDocument();
}); 