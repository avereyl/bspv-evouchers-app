import React from 'react';

import MainMenu from './components/MainMenu';
import {CssBaseline} from "@material-ui/core";

import './App.css';

const App: React.FC = () => {
  
  return (
    <React.Fragment>
    <CssBaseline />
    <div className="App">
      <header className="App-header"></header>

      <MainMenu></MainMenu>
    </div>
    </React.Fragment>
  );
}

export default App;
