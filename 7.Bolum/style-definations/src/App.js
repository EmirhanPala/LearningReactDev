import './App.css';

import A from './components/A';
import B from './components/B';

/*
    Module CSS Kavramı ve neden ihtiyacımız olduğunu bilmek için önce problemin ne olduğunu anlamamız lazım:
    Onun için 2 tane component oluşturuyoruz.
    Componentlerde 2 tane ayrı ayrı css tanımı import edicez.
    Bu css tanımlarının içindede aynı className'lere sahip birer eleman olacak.
    Sonrasında sonucun ne olacağını görecez.
*/

function App() {
    return (
        <div className="App" >
            <header className="App-header" >
                <A />
                <B />
            </header>
        </div>
    );
}

export default App;