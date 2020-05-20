import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    person: [{name:"Tarang",age:45},{name:"Himani",age:56}]
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
              {this.state.person[0].name}
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );

  }


}

export default App;
