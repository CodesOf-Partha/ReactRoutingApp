import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import App from './Todo/App'


const Index = ()=>{
  return <h1>Welcome Home!</h1>
};

const About = ()=>{
  return <h1>Welcome About!</h1>
};

const Contact = ()=>{
  return <h1>Welcome Contact!</h1>
};



const App1= ()=>{
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About/">About</Link>
            </li>
            <li>
              <Link to="/Contact/">Contact</Link>
            </li>
            <li>
              <Link to="/ToDo/">ToDo</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Index} />
        <Route path="/About/" component={About} />
        <Route path="/Contact/" component={Contact} />
        <Route path="/ToDo/" component={App} />
      </div>
    </Router>
  )
}

export default App1;