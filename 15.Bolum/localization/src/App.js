import "./App.css";
import { useState } from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

/*
React ile localization işlemlerinin nasıl yapabiliriz.
Çoklu dil ile alakalı çalışmaları nasıl yönetebiliriz(yürüte biliriz) inceliyicez.

Kullanıcağımız kütüphanenin ismi: react-intl

npm i react-intl
*/

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "3 yeni mesajınız var",
  },
  "en-US": {
    title: "Hello World",
    description: "You have 3 new messages",
  }
};

function App() {
  const [locale, setLocale] = useState("tr-TR");
  return (
    <div className="App">
      <IntlProvider messages={messages[locale]}>
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id="description" />
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
