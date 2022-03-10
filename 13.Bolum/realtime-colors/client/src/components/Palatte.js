import { useState } from 'react'
/*
Renkleri seçip butona basıcağımız panel bu olacak.
*/

import { send } from "../socketApi";
function Palatta({activeColor}) {
  const [color, setColor] = useState("#000");
  return (
    <div className='palatte'>
      <input type="color" value={activeColor} onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => send(color)}>Click</button>
    </div>
  )
}

/* 
Backend artık gönderdiğimiz renk kodunu biliyor. Şimdi yapmamız gereken şey ney?
Backend'e gelen bu datayı her hangi bir kullanıcıdan backend'e gelen bu datayı bağlı olan tüm clientlara iletmemiz lazımki onlarda
Değişimi alabilsinler. O yüzdende bu kanala abone olucaz. (Clientimizde (receive kanalına abone olucaz.))
Her hangi bir data geldiği anda onu yakalayıp kullanıcaz. 
*/

export default Palatta