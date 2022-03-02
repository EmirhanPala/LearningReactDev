import Counter from "./components/Counter";
import { useState } from "react";
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
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div className="App">
      {isVisible && <Counter />}
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;
