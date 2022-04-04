import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";

import { Provider } from "react-redux";
/*
Provider Nedir?
Redux storenizin react uygulamanız içerisinde kullanılabilir, erişilebilir olması için bunu provider adı verilen nesne ile
sarmalamanız gerekiyor. Bu providerı uygulamanızın en dışına koymanız ve bütün componentlerinizi bununla sarmalamanız gerekiyor.
Bu react redux modülü altında bulunan bir nesnedir.
*/

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

store.subscribe(() => {
  console.log("Store updated", store.getState());
});

store.dispatch(action);
console.log(store.getState());

/*
Providerimizi burada app ile sarmalıyoruz.
Bu provideri yazdıktan sonra bir parametre alıyor.
store={store} demeniz gerekiyor. Yani oluşturduğunuz store neyse onu burada tanımlanız gerekiyor.

Şuanda redux storemiz react uygulamamız içerisinde erişilebilir duruma geldi.
*/
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
