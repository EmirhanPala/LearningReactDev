/*
State tanımlarken yapmamız gereken şey nedir?
React'ın altında useState adında bir hook var.
Bunu import ettikten sonra componentimizin içinde fonksiyonun içinde return'ün dışında tanım yapalım.
*/

import { useState } from "react";

function App() {
  //= useState("")'e parametre verebiliyoruz.
  //Boş state'ye varsayılan ilk oluşturulurken bir değer ataması yapılabilir.
  const [name, setName] = useState("Emirhan");
  const [age, setAge] = useState(25);
  console.log(name, age)
  //İlk ekrana geldiğinde ifade ettiği değer Emirhan iken Alttaki butona tıklandıktan sonra Deneme olarak onun değişmesini istiyorum.
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Deneme")}>Change Name</button>
      <button onClick={() => setAge("55")}>Change Age</button>
      <button onClick={() => setAge("55") | setName("Deneme")}>Change All</button>
    </div>
  );

  /*
    NOT:
    Her hangi bir state güncellendiği anda return içerisindeki render işlemi baştan yapılır.
    Yani o görüntü yeniden oluşturulur. Çünki state değişti. State değiştiği içinde arayüzde görünmesi gereken ifade değişti.
    Dolayısıyla component render ediliyor. Bu componentler render edilirkende  dikkat etmemiz gereken durumlar var.
    Mesela gereksiz renderleri önlememiz gerekir?
  */
}

export default App;
