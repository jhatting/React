import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ReactComponent as Logo } from './logo.svg';
function App() {
  return (
    <div>
      {/* Logo is an actual React component */}
      <Logo />
    </div>
  );
}

export default App;
