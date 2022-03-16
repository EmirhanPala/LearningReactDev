import React from 'react'
import styles from './styles.module.css'

/*
Example componenti kaldırdık ve versiyon güncellemesi yapıcaz.
package.json üzerinden ellede yapılabilir ama npm tarafında bunun kodları var. Onlarıda kullanabilirsiniz.
Terminal:

//Sondaki numarayı değiştireceğimiz için:
npm version patch --force
Terminalde v1.0.1 çıktısını alıyoruz
Tekrardan npmjs üzerindeki dosyamızı güncellemek içinde

Terminalde: 
npm publish komutunu çalıştırmamız yeterli olacaktır.

Projede kütüphaneyi güncellemek için
npm upgrade sharkuif

Package json içerisindeki ^ şapka işareti upgrade yapılsa dahi eğer majör bir güncelleme değilse sabit kalır ama güncel kütüphaneyle devam eder. 

Minör Update:
npm upgrade minor -f

Çıktısı: V1.1.0 olmuş oluyor.
Versiyonlama yapılırken ortadaki sayı artarsa onun sağındaki sıfırlanır veya en baştaki artarsa onun sağındakilerde sıfırlanarak ilerler.

Tekrardan npm publish ederek kütüphaneyi güncelliyoruz.

*/

export const Button = (props) => {
  return <button {...props}>{props.text}</button>
};

export const Paragraph = (props) => {
  return <p {...props}>{props.text}</p>
};