import './App.css';
import react from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About"; 

/*
Kurulum için
reactrouter.com/web/

Reactteki routing yapısı:
Aşağıdaki gibi yüklemeleri yapıp kullandığımızda
Home ekranındayız. Örnek: About'a bastığımızda adres satırı ile content'in sayfa yenilenmeden değiştiğini görüyoruz.
Butona bastığımızda hiç bir şekilde sayfa yenilenmiyor.
Tarayıcıdaki adress yerine endpoint
Link içerisinde gelen sayfada content

Yeni versiyonda switch olmadığı için routes kullanılıyor.
Eski versiyonunu kullanmak için
---Önceki kurduğumuz react-router-dom'u kaldıralım.
-npm uninstall react-router-dom
---Şimdi ise eski versiyonu indirmek için alttaki kodu yazalım.
npm install react-router-dom@5.2.0
*/

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

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
