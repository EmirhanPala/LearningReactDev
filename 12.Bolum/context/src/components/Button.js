import { useContext } from 'react'

import ThemeContext from '../context/ThemeContext'

function Button() {
    //Örnek-1:
    //const data = useContext(ThemeContext);
    //console.log(data);
    //Örnek-2:
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div>
            Active Theme: {theme}
            <br />
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
        </div>
    )
}

export default Button