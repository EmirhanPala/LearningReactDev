import './App.css';
import Button from './components/Button';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Container from './components/Container';

/*
Context Api ile State Yönetimi-->Context Provider Side Effects
Yazdığımız provider üzerinde başka neler yapabiliriz onlara bakıcaz.
Temayı değiştirdiğimiz zaman yenile yaptıkmı varsayılan olarak verdiğimiz state neyse onu gösteriyor.
Temayı değiştirdiğimiz anda gidip bunu tarayıcının local storage'sine yazsaydık ve bu provider ilk ayağa kalktığındada
Default olarak gidip o local storage'deki değere göre bunu ayağa kaldırsaydık sayfayı yenilesekte son yaptığımız değişiklik ne ise
Onu görüyor olacaktık.

*/

function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}

export default App;
