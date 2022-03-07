import './App.css';
import react from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About"; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        {

        }
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
