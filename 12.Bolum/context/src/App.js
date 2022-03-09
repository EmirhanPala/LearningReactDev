import './App.css';
import Button from './components/Button';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Container from './components/Container';

import { UserProvider } from './context/UserContext';

/*
Context Api ile State Yönetimi-->Multi Context
Uygulamalarımızda birden fazla context'i barındırabiliriz.
Tek bir context hazırlayıp bütün verimizi bunun altından akıtmak zorunda değiliz.
Öyle bir şey zaten mümkünde değil aslında mümkün ama scale olabilir yapılar kurmakta oldukça zorluk çekersiniz.
Dolayısıyla bir biriyle alakasız olan tüm verileri bir birinden ayırmak. Bir biriyle alakalı olan bütün verileride
Tek bir çatı altında toplamak asıl olan bu durumda. 

Şimdi UserProvider UserContext'i ThemeContext'indeki datayıda kullanabilir durumda olmuş oluyor.
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
