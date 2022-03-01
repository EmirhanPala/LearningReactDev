import './App.css';

//Componentlerde değişken render etmek
const name = "Emirhan";
const surname = "Pala";

function App() {
  return (
    <>
      <h1>{name} {surname}</h1>

      <h1>{`Benim adım ${name}, soyadım ${surname}`}</h1>
    </>
  );
}

export default App;
