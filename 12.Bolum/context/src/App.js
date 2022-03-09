import './App.css';
import Button from './components/Button';
import ThemeContext from './context/ThemeContext';

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

*/

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Button>
        Merhaba,
        <p>Nulla in cupidatat eu adipisicing sunt culpa consectetur duis. Dolor amet velit est consequat veniam anim quis sit reprehenderit. Labore et minim minim mollit et consequat fugiat. Officia in incididunt enim duis ullamco labore. Cillum in veniam excepteur aliqua reprehenderit adipisicing amet amet est ea consequat veniam veniam. Laborum nulla commodo fugiat excepteur anim ut nulla cillum proident. Minim esse nulla adipisicing enim incididunt occaecat eiusmod quis est sunt aute consequat.</p>
      </Button>
    </ThemeContext.Provider>
  );
}

export default App;
