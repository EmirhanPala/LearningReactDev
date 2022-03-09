import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const values = {
        theme,
        setTheme
    }
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

/*
Burada kendi hook'umuzu yazalım.
useContext'i import ettik ve sonrasındada ThemeContext'i kullanmasını söylüyoruz.
Zaten biz bunu yapmıyormuyduk kullanmaya çalıştığımız componentte?
O zaman bizde diyoruzki biz bu işlemi burada yapıyoruz. Sonra bunu dışa aktarırkende sadece useTheme'i dışarı aktarabiliriz.
Onun dışında birde ThemeProvider'ı aktaralım. Manuel exportuda kaldıralım.
*/

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };