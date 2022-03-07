import './App.css';
import react from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About"; 
import User from "./components/User"; 

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
          /*
          Bir route'ye parametre nasıl gönderebiliriz?
          Örnek site: https://v5.reactrouter.com/web/example/url-params
          Route'yi belirlerken path'ine /:id şöyle bir parametre alacağımız alanı belirlememiz gerekiyor.
          : iki nokta üst üste dedikten sonra artk parametre ismini ne olarak belirlemek istiyorsak.
          Onu yazmamız gerekiyor.
          Sonra o route'nin componentindede useParams() hook'unu kullanarak o id'yi veya gönderdiğimiz parametrenin
          İsmi neyse onu karşılayıp hemen altındada kullanabiliyormuşuz.
          */
        }
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
