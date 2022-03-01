import './App.css';
import User from './components/User';

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

function App() {
  return (
    <>
      <User name="Emirhan" surname="Pala" isLoggedIn={true} age={25} friends={friends} />

    </>
  );
}

export default App;
