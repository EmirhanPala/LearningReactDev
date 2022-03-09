import { useContext } from 'react'

import ThemeContext from '../context/ThemeContext'
//Buradaki import işlemini ve useContext işlemini hangi componentte yaparsam yapiyim o veriye erişebiliyorum demektir bu.

function Button() {
    const data = useContext(ThemeContext);
    console.log(data);
    return (
        <div>Button ({data})</div>
    )
}

export default Button