import React from 'react';
import { render } from '@testing-library/react';
import HomeHero from './HomeHero';

describe('HomeHero', () => {
  it('should render title', () => {
    const { getByText } = render(<HomeHero />);
    const titleEl = getByText('Heart Rate Tracker');
    expect(titleEl).toBeInTheDocument();
  });

  it('should render subtitle', () => {
    const { getByText } = render(<HomeHero />);
    const titleEl = getByText('Using Bluetooth Smart Sensor');
    expect(titleEl).toBeInTheDocument();
  });
});
