import './App.css';
import react from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import Error404 from "./components/Error404";
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
          </ul>
        </nav>
        {
          /*
          No Match (404):
          Hata ekranlarını nasıl karşılayabiliriz?
          Kullanıcı gelip bizim var olmayan bir endpointimiz var diyelim.
          Örnek: localhost:3000/asdfasf
          Buraya girmeye çalıştığı anda normal görüntüyü almak yerine
          hata ekranı gösterimi yapabiliriz.
          Bunu yapmak içinde linklerimizde yine Route kullanıyoruz.
          Path olarak * vericez. Hata sayfamız için componentimizi oluşturuyoruz.
          Burada yıldız koymamızın sebebi her türlü eşleş diyoruz.
          Yani yukardaki Routelerin hiç biriyle eşleşmediyse her türlü bununla eşleş
          Çünki hiç biriyle eşleşmediyse öyle bir ekran yoktur. Dolayısıyla bununla eşleşmesi yeterli diyoruz.
          */
        }
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
