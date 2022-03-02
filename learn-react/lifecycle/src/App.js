import { useState, useEffect } from "react";

/*
useEffect:
Bir butona bastığımız anda bu name'i değiştirebiliriz ve bu state güncellenir dolayısıyla bu component render edilir.
Peki bu componentin render edilme durumunu veya her hangi bir statenin güncellenmesi eventinin halini nasıl yakalayabiliriz?

useState gibi useEffect adında bir hookumuz daha var.
Bu hooku kullanarak yaşam döngümüzdeki o eventleri yakalayabiliriz.

useState ve useEffect gibi hookları kullanırken bunlar hiç bir şekilde bir if yapısının içinde olmamalı
Componentin tepesinde bulunmalı ve her hangi bir kontrole tabi olmamalı.
*/

/*
  İlk etapda çalıştırıp console'ye baktığımızda state güncellendi diyor. Bunun gelmesinin sebebi ne?
  Başta bir state oluşturduk ve ona varsayılan değer ataması yapıyoruz. Dolayısıyla o state güncellendi diye logu
  görüntülemiş oluyor.
  Butona her bastığımızda yeni bir log üretiyor. Bu ne demek oluyor?
  State component üzerindeki her hangi bir state güncellendiği anda biz yukarda kullandığımız useEffect ifadesi ile o durumu
  yakalayabiliyoruz demek oluyor.

  Component didMount 
  Reactin daha önceki versiyonunda class componentler kullanıyorduk. Orada özel tanımlı bir fonksiyon vardı component didMount adında.
  Onu kullanmak için Peki o ne işe yarıyor?
  Component dom'a mount olduğu anda o anı yakalayabilmemizi sağlayan bir fonksiyon.
  */

function App() {

  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Emirhan");

  /*
    Arrow fuctionu yazdıktan sonra bir virgül atıp ikinci parametrede array açıp kapatma yapmamız gerekiyor.
    Bunun adı Teknik Termanilojide dependency array olarak geçiyor.(Bağımlılık array'i) olarak geçiyor.
    Eğer [] bunu boş bırakırsak içine bir şey yazmaksak anlamı nedir?
    Component mount edildiği anı yakalarsın demek oluyor.
  */

  useEffect(() => {
    console.log("Component mount edildi!");
  }, []);

  //Bu ifade sadece state'nin güncellendiği anda yazacağı anlamına geliyor.
  // useEffect(() => {
  //   console.log("State güncellendi!");
  // })
  //Number güncellendiğinde bundan haberdar olmak istiyorsak ne yapabiliriz?
  //Hangi state'nin değişimini yakalamak istiyorsak bunun içine [] onun değerini vermemiz gerekiyor.
  // useEffect(() => {
  //   console.log("Number state güncellendi!");
  // }, [number]);
  //Sadece Number ve Name statesinin güncellendiğini görmek için
  // useEffect(() => {
  //   console.log("Number veya Name state güncellendi!");
  // }, [number, name]);
  //[] Array'in içerisine istediğimiz kadar state elemanını ekliyebiliriz.

  //Ayrı görüntülemek içinde
  useEffect(() => {
      console.log("Number state güncellendi!");
    }, [number]);

    useEffect(() => {
      console.log("Name state güncellendi!");
    }, [name]);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <hr />
      <h1>{name}</h1>
      <button onClick={() => setName("Deneme")}>Click</button>
    </div>
  );
}

export default App;
