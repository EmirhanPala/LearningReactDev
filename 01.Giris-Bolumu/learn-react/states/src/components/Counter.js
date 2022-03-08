import { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0);

  /*
        <button onClick={() => setCount(count-1)}>Decrease</button>
        <button onClick={() => setCount(count+1)}>Increase</button>
    Aşağıdaki gibi onclick işlemlerini bu probun içinde yapmak zorunda değiliz. Bunu dışarıda fonksiyon olarakta tanımlayıp kullanabiliriz.
    Her zaman bu methodun içerisindeki işlemler bu kadar kısa olmuyor. Dolayısıyla bunu dışarda bir fonksiyon olarakta tanımlamamız gerekebiliyor.
    Örnek:
  */

    const increase = () => {
        setCount(count+1)
      }
      const decrease = () => {
        setCount(count-1)
      }
      
  return (
    <div>
        <h1>{count}</h1>
        
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Counter