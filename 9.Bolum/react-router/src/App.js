import './App.css';
import react from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
/*
NavLink:
Aslında bunun link'in aynısı gibi düşünebilirsiniz.
Tek farkı şu aktif olan linki biraz daha still olarak özelleştirmek isterseniz
Kullanabileceğiniz kullanışlı bir component.
Örnek:
Home butonuna bastığınızda home ekranında olduğunuz için bu home butonunu biraz daha farklı
aktif olarak göstermek isterseniz. Kullanabileceğiniz bir component.
*/
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/users">Users</NavLink>
            </li>

            {/*
            Kullanım-1:
            <li>
              <NavLink exact activeStyle={{ backgroundColor: "black", color: "#fff"}} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ backgroundColor: "black", color: "#fff"}} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ backgroundColor: "black", color: "#fff"}} to="/users">Users</NavLink>
            </li>*/
            }
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
