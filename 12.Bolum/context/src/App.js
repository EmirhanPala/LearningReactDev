import './App.css';
import Button from './components/Button';
import ThemeContext from './context/ThemeContext';

/*
Context Api ile State Yönetimi-->Context Oluşturmak:
Oluşturacağımız context'in amacı şu olacak. Bir temamız olacak lite mod ve dark mod şeklinde bunun lite veya dark mod diye değerini tutan bir context olacak ve
Bunu altında render edilmiş. Bu context'in altında render edilmiş bütün componentlerden erişip sağladığı datayı değiştirebilmek istiyoruz.

Provide: Sağlamak
Provider: Sağlayıcı
*/


function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Button />
    </ThemeContext.Provider>
  );
}

export default App;
