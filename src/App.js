import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/education" component={Education} />
            <Route path="/experience" component={Experience} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
