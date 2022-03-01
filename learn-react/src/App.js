import './App.css';

const name = "Emirhan";
const surname = "Pala";
//Koşullu render işlemi
const isLoggedIn = false;


function App() {
  return (
    <>
      <h1>
        {isLoggedIn && `Benim adım ${name}, soyadım ${surname}`}
        {!isLoggedIn && "Giriş Yapmadınız."}
        <br/>
        {isLoggedIn ? `Benim adım ${name}, soyadım ${surname}` : "Giriş Yapmadınız."}
        
      </h1>
    </>
  );
}

export default App;
