import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PasswordTextField from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PasswordTextField />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
