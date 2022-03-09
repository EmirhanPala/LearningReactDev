import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

//Buradaki ThemeProvider ismine aldanmayın. Aslında react componenti buda dolayısıyla react componentinde ne yapabiliyorsak o işlemleri
//Bu provider içindede yapabilirsiniz.
export const ThemeProvider = ({ children }) => {
    //Local storage'deki değeri varsayılan olarak statemize verirsek yenilediğimizde kaldığı yerden devam edecektir.
    //Local storage'de o anda bir şey yoksa light veya dark yazsın diyebiliriz.
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    /*
    Bu theme her değiştiğinde bana söyle diyoruz.
    */
    useEffect(() => {
        //console.log(theme); burada kontrol ettiğimiz datayı local storagemize yazabiliriz.
        //theme parametresine , theme'yi ekliyoruz.
        //Dev Tools bölümünden Application->Local Storage bölümünden görüntüleyebiliyoruz.
        //key'imiz theme | value'miz theme = dark veya light neyse o yazılacak.
        localStorage.setItem("theme", theme);
    }, [theme]);

    const values = {
        theme,
        setTheme
    }
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export default ThemeContext;