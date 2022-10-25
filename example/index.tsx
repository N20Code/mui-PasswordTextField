import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PasswordTextField from '../src';

const App = () => {
  return (
    <div>
      <PasswordTextField InputProps={{ withToggleVisibility: <>ab</> }}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
