import { render, screen } from '@testing-library/react';
import React from 'react';
import HomePageWeather from "./HomePageWeather";

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { temperature: 20, precipitation: 5 } }))
}));

describe('HomePageWeather', () => {
  it('displays the temperature and precipitation from the API', async () => {
    render(<HomePageWeather />);
    const temperatureElement = await screen.findByText(/Temperature:/);
    const precipitationElement = await screen.findByText(/Precipitation:/);

    expect(temperatureElement).toHaveTextContent('Temperature: 20');
    expect(precipitationElement).toHaveTextContent('Precipitation: 5');
  });
});
