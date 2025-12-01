import React from 'react';
import {render, screen} from "@testing-library/react";
import App from "./App";

it('tests', () => {
    render(<App/>);

    const element = screen.getByTestId('app');

    screen.debug();

    expect(true).toBe(true);
})
