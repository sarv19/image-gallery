import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /my app/i });
  expect(headerElement).toBeInTheDocument();
});

test('renders image gallery', () => {
  render(<App />);
  const galleryElement = screen.getByTestId('image-gallery');
  expect(galleryElement).toBeInTheDocument();
});

test('renders images in the gallery', async () => {
  render(<App />);
  const images = await screen.findAllByRole('img');
  expect(images.length).toBeGreaterThan(0);
});

test('renders loader while images are loading', () => {
  render(<App />);
  const loaderElement = screen.getByTestId('loader');
  expect(loaderElement).toBeInTheDocument();
});

test('renders username and likes for each image', async () => {
  render(<App />);
  const usernames = await screen.findAllByText(/username/i);
  const likes = await screen.findAllByText(/♡/i);
  expect(usernames.length).toBeGreaterThan(0);
  expect(likes.length).toBeGreaterThan(0);
});

test('handles image load error gracefully', async () => {
  render(<App />);
  const brokenImage = screen.getByAltText('broken image');
  fireEvent.error(brokenImage);
  expect(brokenImage).not.toBeInTheDocument();
});
