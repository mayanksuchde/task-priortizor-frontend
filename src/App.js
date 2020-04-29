import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Project from './Project';
import './App.scss';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
        <NavBar />
      <div className="App">
        <Switch>
          <Route exact path='/' render={(props)=>{return <Home {...props} />}} />
          <Route path='/projects' render={(props)=>{return <Projects {...props} />}} />
          <Route path='/dashboard' render={(props)=>{return <Dashboard {...props} />}} />
          <Route path='/project' render={(props)=>{return <Project {...props} />}} />
        </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;
