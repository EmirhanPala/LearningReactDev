import './App.css';
import User from './components/User';

/*
Kendi yazdığımız componentlerde parametreler ve propertyler geçebiliriz.

Bool değer göndereceğimiz için bunu string olarak gönderemeyiz.
Bu yüzden {false} süslü parantezlerin içerisinde false veya true yazarak gönderebililiriz.
Aynı şekilde bir sayı göndereceğimiz zamandada süslü parantezler içerisinde gönderebiliriz.
String ifadelerde aynı şekilde gönderilebilir ama string gördediğimiz için çokta bir anlamı yok.

Propslar bu şekilde yazdığınız componentlere her hangi bir parametre geçip onu yazmış olduğunuz component'de karşılayıp
kullanabiliyorsunuz.
*/

function App() {
  return (
    <>
      <User name="Emirhan" surname="Pala" isLoggedIn={true} age={25} />

    </>
  );
}

export default App;
