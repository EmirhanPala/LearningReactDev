import './App.css';
import {useState} from 'react';
import Header from './components/Header';
/*
Click butotuna bastığımızda header'da yeniden render ediliyor.
Biz headerda bir şey değiştirmedik bunun değişmemesi gerekmezmiydi?

Şöyle:
App.js üzerinde statemiz varya number isminde ve biz bu numberi butona bastığımızda arttırıyoruz.
Yani numberin değeri değişmiş oluyor. Bu numberin değeri değiştiği andada state değiştiği için ne oluyor?

return bölümü komple baştan render ediliyor. Peki bu return'ün içinde header'de yokmu? Evet var dolayısıyla headerda baştan render ediliyor.
İşte bu bizim için bir problem!
Bu react componentimizdeki gereksiz render anlamına geliyor. Bunun önüne geçmemiz gerekiyor.
*/
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <Header />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}>Click</button>
    </div>
  );
}

export default App;
