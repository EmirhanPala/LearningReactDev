import { useContext } from 'react'
import Button from './Button';
import Header from './Header';

import ThemeContext from '../context/ThemeContext'
/*
Context Api'yi kullandığımız zaman her hangi bir state'i her hangi bir başka componentte kullanmak için iç içe, alt alta ve tekrar tekrar prop olarak gönderip
Kullanmamıza gerek yok. Context denen bir yapı var. Bu yapıyı kullanarak bu işlemi çok basit bir şekilde yapabiliyoruz.
*/
function Container() {
    const { theme } = useContext(ThemeContext);
    //console.log(theme);
    return (
        <div className={`app ${theme == "dark" ? theme : ""}`}>
            <Header />
            <hr />
            <Button />
        </div>
    )
}

export default Container