import "./App.css";
import { useState, useEffect } from 'react';
import { IntlProvider, FormattedMessage } from "react-intl";

/*
Web sitemizi ilk açtığımızda bizi türkçe içerik karşılıyor.

Sorunlar-1:
Browserimizin diline göre varsayılan olarak yazılarımızı getirtelim.
Sorunlar-2:
Sayfa yenilendiğinde en son hangi dil seçildiyse yenilendiğinde o dilden devam etmemesi.

Bu 2 sorunu çözücez.


//Mesajlarımızda data parametresi nasıl geçebiliriz?
*/

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} yeni mesajınız var",
  },
  "en-US": {
    title: "Hello World",
    description: "You have {count} new messages",
  }
};

function App() {
  //local storage kayıtlı dili getirtiyoruz.
  const isLocale = localStorage.getItem("locale");
  //Tarayıcının varsayılan dilini yazdırıyoruz. navigator.language
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  //console.log(defaultLocale);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id="description" values={{ count: 5 }} />
        </p>

        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
