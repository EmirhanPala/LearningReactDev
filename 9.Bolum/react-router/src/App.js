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
          /*
          Switch çalışma mantığı: 
          Switch'e girdiğiniz zaman 1'incisine bakıyor.
          Başta home'nin olduğunu düşünürsek path ney? /
          Peki bu ifade diğer sayfalardada varmı? Var o yüzden eşleştiği için direk olarak bunu çalıştırıyor bizim için.
          Yani burada bir düzenli ifade var ve o düzenli ifade ile bizim endpointimiz bir yere kadar eşleştiği için
          Doğrudan onu kabul ediyor. Onu çalıştırıyor.
          Yani home en üstteyken diğer sayfalara girdiğimizde endpoint değişirken content değişmiyecektir.
          Bundan kurtulmak için Home'u en altta yazarız.
          İllede en üste yazıp kullanacaksakda şöyle yaparız.
          exact bunu yazarsak yine o sorundan kurtulmuş oluyoruz.
          exact propuda bu işe yarıyor.
          */
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
