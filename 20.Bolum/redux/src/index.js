import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";

/* 
combineReducer ile multi reducer kullanımı:
Birden fazla bir sürü reducer'imiz olacak. O yüzden bu reducerlarımızı birleştirmemiz gerekiyor.
Burdada combineReducers adında methodumuz var. Bunu kullanarak yapabiliyoruz.
*/

//Ecma Script'in yeni versiyonuyla birlikte default bir eşitleme yapabiliyoruz. State'e default olarak bir undefined filan gelir diye 
//Boş bir array ve string veriyoruz.
function userReducer(state = "", action) {
  return state;
}
function productReducer(state = [], action) {
  return state;
}

//Yapmamız gereken şey burada reducerları birleştirmek.
const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer
});
//Storeye vermemiz gerekirkende rootReducer'i vericez.
const store = createStore(rootReducer);
console.log(store.getState());

/*
combineReducer ile multi reducer kullanma işlemini öğrendik. rootReducer oluşturup buna combineReducers'imizi tanımladık ve elimizdeki
reducerlarımızı içerisinde birleştirdik ve createStore'da rootReducerimizi verdik ve store.getState dediğimizde ilgili storeyi
consolemizde görüntüleyebildik.
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
