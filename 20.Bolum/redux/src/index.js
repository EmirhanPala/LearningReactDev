import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

/* Dispatch:
Store'mizi Dispatch methoduyla nasıl güncelliyeceğimizi görücez.

*/

/*
Action'u ekledikten sonra burada reducer'imiz 2 parametre alıyor.
1.State
2.Action
*/

function reducer(state, action) {
  //console.log(action);
  /* Reducerlar kendisine gönderilen datayı, state'i güncelliyerek yerine yeni bir state döner demiştik.
  İşte burada biz onu yaptık. Dedikki
  Gönderilen action tipi changeTheState ise bana yeni state'i dön.
  Eğer böyle bir ifade yoksa default olarak state'i dön diyoruz.
 */
  if (action.type === "changeTheState") {
    return action.payload.newState;
  }
  return "state";
}
const store = createStore(reducer);
console.log(store.getState());

/*
Action'un tipini burada belirttik.
İlgili data neyse onu göndermemiz gerekiyor. Bunu genelde payload property altında gönderiyoruz.
*/
const action = {
  type: "changeTheState",
  payload: {
    newState: "my new state",
  },
};

store.dispatch(action);
console.log(store.getState());

/*
Tekrarlayalım:
Reducerlar store'deki ilgili datayı ilgili stateyi alıp. Üzerine vermiş olduğumuz payloaddaki data ile güncelliyerek.
Yenisini döner ve daha sonra store bu şekilde güncellenmiş olur.
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
