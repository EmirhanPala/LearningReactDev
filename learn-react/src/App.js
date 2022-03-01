import './App.css';
import User from './components/User';

/*
Şimdi elimizdeki bu componente bir array geçicez.
Yani prop olarak array vericez bu array'i componentin altında listelemeye çalışacağız.
*/
const friends = [
  {
    id:1,
    name:"Emirhan"
  },
  {
    id:2,
    name:"Sercan"
  },
  {
    id:3,
    name:"Deneme"
  },
  {
    id:4,
    name:"Test"
  }
];

//Örnek 2:
function App() {
  return (
    <>
      <User name="Emirhan" surname="Pala" isLoggedIn={true} age={25} friends={friends} />

    </>
  );
}

/*
Örnek 1:
function App() {
  return (
    <>
      <User name="Emirhan" surname="Pala" isLoggedIn={true} age={25} friends={["Sercan", "Deneme", "Test", "Test2", "Test3", "Test4"]} />

    </>
  );
}
*/

export default App;
