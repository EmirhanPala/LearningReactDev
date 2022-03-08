import './App.css';
import {useState} from 'react';
import Header from './components/Header';
/*
Peki bu header ne zaman render edilecek? Hep böylemi kalacak.
Şöyleki bu header'a bu component'e geçtiğiniz propertyler(proplar) ne zaman değişirse işte o zaman render edilir.
Örneğin headerede numberi geçersek. Burdaki stateteki numberi prop olarak header componentimize geçelim.
Headerdede onu prop olarak alalım.
Artık butona bastığımız anda header componentin render olduğunu söylüyor her defasında oda render oluyor çünkü header componentin aldığı propertyler değişti.
Dolayısıyla render edilmesi zaten gerekiyor ve bu bizim için gereksiz bir render olmamış oluyor bu saatten sonra.

Farkı daha iyi anlıyabilmek için:
Bu numberi 5'den büyük olduğu zaman değiştirsek?

Örnek: number < 5 ? 0 : number
Dty: number eğer küçükse 5 den her zaman 0 göndersin değilse 5 den büyükse direkt olarak numberi göndersin istiyoruz.
O zaman bu ne demek olacak? Bu numberin değeri 5 olana kadar aslında header componenti her defasında render edilmeyecek demektir.
Ve şimdi butona ilk bastığımız zaman h1 deki number 1 olurken headerdeki 0 olarak kalacak ve dolayısıyla burası render edilmiyecek.
Şimdi 5 olduğu anda iki yerdede sayı 5 olmalı aynı zamandada consolemizde log görmeliyiz. Çünkü bu header componentin baştan render olması gerekiyor.

*/
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}>Click</button>
    </div>
  );
}

export default App;
