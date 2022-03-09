import './App.css';
import Button from './components/Button';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Container from './components/Container';

import { UserProvider } from './context/UserContext';

/*
Context Api ile State Yönetimi-->Custom Context Hook
Her defasında bir component'e bir context kullanıcağımız zaman örneğin: Button.js içindeki ThemeContext kullanıcağımız zaman
Önce context'in kendisini import ediyoruz. Sonra react'in altında useContext'i alıp function içinde kullanıyoruz. Bu diğer yaptıklarımız içinde geçerli.
Bu her defasında tekrar tekrar yapmak insanı yorabiliyor. Bunu biraz daha güzelleştirme şansımız var aslında. 

Şimdi bizim olayımız ney? Bir context import ediyoruz component'e yani dışa aktardığımız ThemeContext'i ilgili component'e içe aktarıyoruz.
Sonrada react'in altından useContext alıyoruz. İşte aynı işi aslında ThemeContext'in içinde yapabiliriz.

Yaptığımız bu örneklede contextlerimizi biraz daha yalınlaştırmış olduk.

*/

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
