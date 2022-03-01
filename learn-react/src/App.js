import './App.css';
import React from 'react';
import Header from './components/Header';

/*
JSX'de dikkat etmemiz gereken kurallar.
Bir component'in içinde mutlaka kapsayıcı bir etiket olması gerekiyor.

Bazı Özel Tanımlı Keywordler Var JS İçin
İF,CLASS,FOR gibi özel tanımlı keywordlerimiz
Bunları JSX yazarken kullanmamamız önemli!
*/

function App() {
  return (
    <>
      <Header />
      <p className='xyz'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>

      <label htmlFor='myinput'>
        Name
        <input id="myinput" />
      </label>
    </>
  );
}

export default App;
