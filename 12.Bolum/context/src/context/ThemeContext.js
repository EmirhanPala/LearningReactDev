import { createContext, useState } from "react";

const ThemeContext = createContext();

//TheProvider diye bişiy tanımladık. Sonra bunu dışa aktardık. Neyi return ediyor? ThemeContext.Provider var ve içinde children yazıyor.
//Peki ThemeProvider dosyamızı App.js içerisine import edip içini doldurursam aslında aynı şey olmuş oluyor.
//App.js'deki ThemeProvider içinde ne varsa olduğu gibi bu Provider'ın içine gelmiş oluyor.
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    /*
    theme'nin verisini stringini tutan statemizi ve bunu manipüle edicek olan fonksiyonumu bir şekilde Provide etmem gerekiyor.(value kısmında vermemiz lazım.)
    */
   const values = {
       theme,
       setTheme
   }
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

/*
Fark ne oldu?
İlgili context ile alakalı yapıcağımız her şeyi o context dosyasının içerisinde barındırmış oluyoruz.
Bir daha bu App.js içindeki App dosyamızı karmaşık hale getirmek zorunda kalmıyoruz.
Şuan 1 tane context'imiz var o kadar karışık görünmüyor olabilir ama belki onlarca context kullanıcaksınız. Öyle durumlarda
Oldukça karmaşık görünüme sebep verebilirsiniz. O yüzden böyle düzenli gitmek daha mantıklı olan.
*/

export default ThemeContext;