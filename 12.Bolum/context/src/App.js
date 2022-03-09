import './App.css';
import Button from './components/Button';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';

/*
Context Api ile State Yönetimi-->Context Provider:
Provide: Sağlamak
Provider: Sağlayıcı

Context'ten sağlamış olduğumuz dataları değiştirdiğimiz anda kullanılan componentlerdede anlık olarak değiştiğini gözlemlemeye çalışacağız.

Ondan önce önceki yazdığımız provider'ımızı biraz daha yönetilebilir daha temiz bir hale getirmek için ve bu app component'ini biraz daha
Temiz bırakmak için Provider'ı ThemeContext üzerinde tanımlayabiliriz. İlla app içerisinde yapmak zorunda değiliz.

Öncesinde reactte children diye bir mantık var. <Button> Buranın içerisini istediğimiz gibi doldura biliriz. </Button>
Sonrasında Button.js' içerisine girdiğimizde function Button({children}) burada bize prop olarak children diye bir şey geliyor.
Eğer biz bu children'i kullanırsam return içerisinde App.js içerisinde butonun içine ne yazdıysam onu aslında alıp button.js'de kullanmış oluyorum.

//////////////////////////////////////////////////////////////////
Şimdi amacımız provider'ı context üzerine taşımak.


*/

function App() {
  return (
    //Burada ThemeProvider içine yazıcağımız ifade aslında children olmuş oluyor.
    <ThemeProvider>
      <Header />
      <hr />
      <Button />
    </ThemeProvider>
  );
}

export default App;
