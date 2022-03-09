//Artık bunada ihtiyacımız yok
//import { useContext } from 'react'

//Artık bu import işlemini yapmıyoruz.
//import ThemeContext from '../context/ThemeContext'

import {useTheme} from '../context/ThemeContext';

//Artık böyle kullanabiliriz.
function Button() {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            Active Theme: {theme}
            <br />
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
        </div>
    )
}

export default Button