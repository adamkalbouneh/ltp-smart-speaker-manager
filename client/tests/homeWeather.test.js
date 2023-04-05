import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { temperature: 20, precipitation: 5 } }))
}));

describe('App', () => {
  it('displays the temperature and precipitation from the API', async () => {
    render(<App />);
    const temperatureElement = await screen.findByText(/Temperature:/);
    const precipitationElement = await screen.findByText(/Precipitation:/);

    expect(temperatureElement).toHaveTextContent('Temperature: 20');
    expect(precipitationElement).toHaveTextContent('Precipitation: 5');
  });
});
