import { useContext } from 'react'

import ThemeContext from '../context/ThemeContext'

function Button({children}) {
    const data = useContext(ThemeContext);
    console.log(data);
    return (
        <div>{children}</div>
    )
}

export default Button