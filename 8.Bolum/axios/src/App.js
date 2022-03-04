import './App.css';
import Users from './components/Users';

/*
Her hangi bir veri kaynağına gidip. O veri kaynağındaki ilgili veriyi aldıktan sonra ekranımızda nasıl gösterebiliriz? Bu işlemlere bakıcaz.

Fake Api: jsonplaceholder.typicode.com
*/

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
