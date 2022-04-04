import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";

function userReducer(state = "", action) {
  return state;
}
function productReducer(state = [], action) {
  switch (action.type) {
    case "userUpdate":
      return action.payload;

    default: 
      return state;
  }
}

const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
});

const action = {
  type: "changeTheState",
  payload: {
    newState: "my new state",
  },
};
/*
Redux devtoolsuda aşadaki örnekteki gibi ekliyoruz.
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
*/
const store = createStore(
  rootReducer,
  {
    products: [
      {
        name: "Samsung",
        type: "TV",
      },
    ],
    user: "Emirhan",
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const updateUserActions = {
  type: "userUpdate",
  payload: {
    user: "Emirhan Test",
  },
};

store.dispatch(updateUserActions);

console.log(store.getState());

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
