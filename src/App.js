import React, { Component } from 'react';
import './App.css';
import 'purecss';

import Header from './components/shared/Header';
import Todo from './components/Todo/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <Todo />
        </div>
      </div>
    );
  }
}

export default App;
