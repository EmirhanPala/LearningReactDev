import React from 'react'

import { Paragraph, Button } from 'sharkui'
import 'sharkui/dist/index.css'

const App = () => {
  return (
    <>
      <Paragraph text="Merhaba" />
      <Button text="Click" onClick={() => alert("test")} />
    </>
  )
}

/*
Semantic Versiyonlama: package.json içerisindeki version

1.0.0
En sondaki sıfır: Semantic versiyonlama özelinde bug fixler yaptıktan sonra bir takım page işlemleri yaptıktan sonra
ufak tefek hata giderimleri yaptığımızda arttıracağımız versiyon numarasıdır.

Ortadaki sayı: Minör değişikler için -> Örnek: Sistemin tamamını etkileyecek bir şey değilde ufak tefek bir tane fonksiyon geliştirdiniz.
Performans arttırıcı bir iyileştirme yaptığınız gibi durumlarda ortadaki versiyon numarasını arttırıp ilerleyebilirsiniz.

En baştaki sayı: Majör versiyon demek oluyor. Onu arttırdığınızda aslında sistemin tamamının çalışma şekli temelden değişmiş olmuş oluyor.
Şöyleki: Bir proje yaptınız bu nodejs'de çalışıyor backend'i sonra veritabanı postgresql diye düşünelim. Sonra ertesi gün büyük bir güncelleme
yaptınız ve artık mongodb ile çalışıyor olsun yani sistemin temelinin çalışma mantığı çok büyük oranda değişmiş. Örnek: fonksiyon isimleri değişmiş
Bir takım fonksiyonlar varken artık kaldırılmış gibi düşünülebilir. Çok büyük güncellemelerde baştaki numarayı arttırabilirsiniz.


*/

export default App
