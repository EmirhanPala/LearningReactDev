import './App.css';
import Button from './components/Button';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Container from './components/Container';

/*
Context Api ile State Yönetimi-->Theme Switcher Yapımı
Provide: Sağlamak
Provider: Sağlayıcı
---------------------
Elimizdeki theme datasını kullanarak bir stillendirme yapalım.
Dark mod seçildiği anda ekran siyah olsun light mod seçildiğindede beyaz olsun şeklinde.

//////////////
Şimdi bu işlemi en dıştaki divimiz üzerinden götüreceğimiz için yani dark olduğunda farklı bir className'i ve light olduğunda farklı bir className'i
İlgili div'e vermek istiyicem. Fakat bunu App.js dosyasında yapamayız. Çünkü zaten App.js dosyasında bu provider kullanılmaya başlanıyor.
Eğer bu app.js componentini sarmalayan bir yapı yoksa kullanamayız. Dolayısıyla şöyle bir şey yapabiliriz. Bir tane daha component oluştururuz.
Container.js oluştururuz. App.js içindeki yaptığımız işlemleri <header'den  almaya başlayıp container js içerisine yerleştiririz. 

Artık container componentinin içerisinde ThemeProvider'dan gelen datayı kullanabilicez.
*/

function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}

export default App;
