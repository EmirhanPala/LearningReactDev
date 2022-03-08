import './App.css';
import { useState, useMemo } from 'react';
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

Eğer bunu yöntem-1'deki gibi yazamıyorsak illada içerde yazmamız gerekiyorsa componentin içindeki bir veriyide kullandığımız bir durum söz
konusuysa şöyle bir yönteme gitmek gerekecek. React'ın altında gelen useMemo adında hook'umuz var.
Yapmamız gereken aslında bunu kullanmak. syntax'ı useEffect gibi bir farkı yok yine oda bir dependency bir array alıyor.

Bunun içerisinde eğer return işlemini yaparsak artık tekrar tekrar header componenti render edilmemiş olacak.
Click butonuna basıyoruz ve az önceki gibi header componentimiz tekrar tekrar render olmuyor.

Peki ne zaman bu data yeniden hesaplanacak?.
Bu data ancak [] dependency arrayde belirtmiş olduğumuz veriler değiştiği anda hesaplanır.
Örneğin: Oraya number'i eklersek number her değiştiğinde return bölümü baştan hesaplanmış olacak.

Durum bu useMemo böyle bir hook. Bunu dediğimiz gibi array'ler içerisinde kullanabilirsiniz.

*/
function App() {
  const [number, setNumber] = useState(0);
  /*const data = useMemo(() => {
    return { name: "Emirhan" };
  }, []);*/
  /*const data = useMemo(() => {
    return { name: "Emirhan", number };
  }, [number]);*/
  const data = useMemo(() => {
    return calculateObject();
  }, []);
  return (
    <div className="App">
      <Header data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}
/* data:
Şimdi bu durum belki şuanda çokta önemsenecek bir şey değil, fakat eğer şöyle bir durum olsaydı.
Eğer bizim bir fonksiyonumuz olsaydı ve [{ name: "Emirhan", number }]; şurdaki datayı bize veriyor olsaydı.

Böyle denediğimizde yine aynı şekilde çalışmaya devam ediyor. (Render işlemi yapmadan)
*/

function calculateObject(){
  return { name: "Emirhan" };
}

export default App;
