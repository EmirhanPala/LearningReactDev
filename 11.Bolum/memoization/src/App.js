import './App.css';
import {useState} from 'react';
import Header from './components/Header';
/*
useMemo:
data adında bi obje oluşturalım. Bunu yine componentimizde karşılayalım.
Şimdi butona her bastığımızda yine baştan render ediliyor.

Şimdi demiştikki react.memo ile sarmaladığımız bi componente gönderdiğimiz proplar değişmediği sürece
o component baştan render olmaz demiştik.
Bizim burada gönderdiğimiz prop data yani içindeki name adında bir field var ve ifade ettiği değerde Emirhan aynı bir şey değişmiyor.
Peki neden? Her defasında bu component click'e tıkladığımızda render oluyor?

Şimdi şöyle bir durum var(Javascriptte şöyle bir gerçek çıkıyor karşımıza):
false denkmidir false'ye ? false === false : denktir dimi : true
true denkmidir true'ya ? true === true : denktir : true veya
5 denkmidir 5'e ? 5 === 5 : denktir : true evet
privative veri türlerinde evet böyle
eğer biz objenin başka bir objeye olan denkliğini sorgulamaya çalışırsak.
Örnek: {} === {} : false | Burada karşımıza farklı bir durum çıkıyor.
Çünkü: Şu objenin bellek üzerinde referansıyla diğer objenin bellek üzerindeki referansları farklı dolayısıyla 
Bunların denkliğini sorguladığımız zamanda karşımıza false çıktısı geliyor.
Veya bir array'i sorgulayalım. [] === [] : false | yine false çıktısını alıyoruz.
Şimdi durum böyle olunca ve ben burada butona her bastığımda setNumber çalıştığında ve numberin değeri arttığında
Bu componentin baştan render olduğunu söylemiştik. Bu baştan render olduğu içinde aslında data'da baştan hesaplanıyor.
Yani bu datanın bellek üzerindeki referansı değişiyor. Bu referans değiştiği için ve headerede prop olarak geçildiği için
React.memo gerekli sorgulamayı yapıyor. Proplar değişmişmi değişmemi
Şimdi burada false çıktısını aldığı içinde denk olmadığını anladığı içinde tekrardan burayıda render ediyor.
Dolayısıyla sorunumuzda bu.

Peki bundan nasıl kurtulucaz?
Yöntem 1: En basit yöntem.
Eğer bu datayı function() componentin dışında bir yerlerde yazabiliyorsak böyle yazdığımızda aslında problemden kurtulmuş olucaz.
Ve test ettiğimizde her hangi bir şey render etmiyor.

*/
//Yöntem 1:
const data = { name: "Emirhan"};

function App() {
  const [number, setNumber] = useState(0);
  
  return (
    <div className="App">
      <Header data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}>Click</button>
    </div>
  );
}

export default App;
