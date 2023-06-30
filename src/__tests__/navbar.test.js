import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders logo and heading', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const heading = screen.getByText(/Space Travelers' Hub/i);
    const logo = screen.getByAltText(/My logo/i);
    expect(heading).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const rocketsLink = screen.getByText(/Rockets/i);
    const missionsLink = screen.getByText(/Missions/i);
    const myProfileLink = screen.getByText(/My Profile/i);
    expect(rocketsLink).toBeInTheDocument();
    expect(missionsLink).toBeInTheDocument();
    expect(myProfileLink).toBeInTheDocument();
  });
});
