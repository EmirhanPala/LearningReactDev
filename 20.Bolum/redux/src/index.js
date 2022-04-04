import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
Redux'ın createStore adında bir methodu var.
*/
import { createStore } from 'redux';

/*
Reducerimizi oluşturuyoruz.
*/
function reducer(){
  return 'state';
}

/*
createStore ile storemizi oluşturuyoruz.
*/
const store = createStore(reducer);

/*
Store'nin getState adında bir methodu var. Bu method ile state'e ulaşabiliyoruz.
Log ile reducer'da return ettiğimiz data ne ise şuanda statemizde o bulunuyor.

Özeti: Storemizi oluşturduk ve reduceri bu store'a bağladık daha sonrada getState ile bu storenin içerisindeki
dataya erişmiş olduk.
*/
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
