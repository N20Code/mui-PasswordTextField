import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PasswordTextField from '../dist';

const App = () => {
  return (
    <div>
      <PasswordTextField />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
