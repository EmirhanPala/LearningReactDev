import './App.css';
import { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
/*
useCallback:
Şöyle bir şey yapıcaz. Click butonumuzu buradan alıp. Header'e taşıyıcaz ve arttırma işlemini orda yaptırmaya çalışıcaz.
Şimdi butonu buradan alıp headere eklediğimizde setNumber işlemi headerde componentinin içinde olmadığından 
Bizim bunu header'e prop olarak göndermemiz lazım. Nasıl?
<Header increment={() => setNumber(number + 1)} /> increment olarak yazıp gönderip sonra o prop'u
Header.js içinde function içinde kullanabiliriz.

Kullandığımızda yine arttırma işlemini gerçekleştiricek. Fakat console logunda gördüğümüz gibi Header componentinin her defasında
render olduğunu görüyoruz. Neden?
Şimdi number değeri her arttığında App'in içi render oluyor. Render olduğu içinde Header componentinin increment prop'undaki 
() => setNumber(number + 1) fonksiyonda aslında baştan hesaplanıyor ve Baştan hesaplandığı içinde header componentinin içerisinde
React.memo olmasına rağmen sanki yeni bir prop varmış gibi algılanıp tekrar tekrar render ediliyor.
Bizim yapmamız gereken nedir?
increment'teki verdiğimiz fonksiyonun aslında her defasında değişmediğini aynı olduğunu bir şekilde söylemek.
Nasıl söyliyeceğiz?
Karşımızıda burada useCallback diye bir tanım(hook) çıkıyor.
Bu hook ile bir fonksiyon dönüyoruz ve o yaptığımız, kullandığımız veya yazdığımız fonksiyonu memoize etmiş oluyoruz.
Nereye kadar?: dependency arrayde verdiğimiz artık datalar değişene kadar o fonksiyon aynı kalıyor.

Örnek:
*/
function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  /*
  Örnek-1: numberi array içine vermezsek butona bastığımızda 0 dan 1 e çekecek ve tekrar her bastığımızda o değer artmıyacak.
  Sebebi: increment fonksiyonu içerisinde setNumberi kullanıyorum ve number+1 yapıyorum. Numberin ilk değeri ney? (0)
  0+1 ne = 1 ve biz bu fonksiyonu <Header increment={increment} /> buraya geçtiğimiz zaman aslında hep number'i 1 yapacak fonksiyon iletilmiş oluyor.
  Eğer array'in içerisine number'i koyarsak o zaman değer artacaktır. Çünkü: number her değiştiğinde setNumber fonksiyonu baştan hesaplanacağı için 
  Problem olmayacak ama o zamanda karşımıza başka bir problem çıkacak!
  Kullandığımızda butona bastıkmı her defasında render ediyor. 
  Bunun sebebi ney?:
  number her değiştiğinde biz setNumber fonksiyonu baştan tanımla dediğimiz için yine baştan tanımlıyo ve dolayısıyla burada yine header componentinde
  Farklı bir prop varmış gibi algılanıp baştan render ediliyor.
  O zaman biz bu dependency number'dan kurtulabilirsek aslında problemimiz çözülmüş olacak.
  Bunuda nasıl yaparız?:
  State'lere atama işlemi yaparken callback'de önceki state'yi alabiliriz.
  setNumber((prevState) => prevState + 1);
  Tekrar baktığımız zaman artık artış işlemi gerçekleşiyor. Fakat header componenti yani yukarısı tekrar tekrar render olmuyor.

  Eğer bir fonksiyonunuz varsa ve bu fonksiyonu her hangi alt bir componente geçiyorsanız ve o alt componentde tekrar tekrar render olmasını istemiyorsanız
  Çünkü bu geçtiğimiz tanımlar o fonksiyon her defasında bu component her render edildiğinde baştan hesaplanacağı için o header'da içinde react.memo olmasına rağmen
  Tekrardan render edilecektir. Bu durumlardan kurtulmak için fonksiyonlar üzerinde useCallback kullanılabilir.
  */
  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);
  return (
    <div className="App">
      <Header increment={increment} />
      <hr />
      <h1>{number}</h1>

      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

export default App;
