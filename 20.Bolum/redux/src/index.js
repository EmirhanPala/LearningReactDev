import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";

/*
Store Subscribe:
Storede her hangi bir değişiklik olduğunda bu değişiklikten haberdar olmak istersek bu methodu kullanabiliriz.

*/

function userReducer(state = "", action) {
  return state;
}
function productReducer(state = [], action) {
  return state;
}

const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer
});

const action = {
  type: "changeTheState",
  payload: {
    newState: "my new state"
  }
};

const store = createStore(rootReducer);
console.log(store.getState());

/*
Actions dispatch olduğunda bu işlem gerçekleşmiş olacak.
*/
store.subscribe(() => {
  console.log("Store updated", store.getState());
});

store.dispatch(action);
console.log(store.getState());

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
