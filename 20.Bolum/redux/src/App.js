import logo from "./logo.svg";
import "./App.css";
import { Connect } from "react-redux";
/*
Connect ile component'e bağlanmak:
Storemizi componentimize bağlamak için kullanacağımız connect adında bir nesne var.
react-redux altında bulunuyor ve projemize dahil ediyoruz.
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

/*
Connectimizi buraya yazıyoruz.
Şöyle bir yapısı var.
Componentimizi ikinci parantezin içerisinde parametre olarak belirtmemiz gerekiyor.

*/
export default connect()(App);
