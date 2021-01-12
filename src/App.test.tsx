import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('increments and shows the status', () => {
    const {getByText} = render(<App/>)

    expect(getByText('Current count: 0')).toBeInTheDocument()
    expect(getByText('Status: Poor')).toBeInTheDocument()

    fireEvent.click(getByText('Increment'))
    fireEvent.click(getByText('Increment'))
    fireEvent.click(getByText('Increment'))

    expect(getByText('Current count: 3')).toBeInTheDocument()
    expect(getByText('Status: Great')).toBeInTheDocument()
  });
});
