import io from 'socket.io-client';
/*
Kuruduğumuz modülü buraya ekliyoruz.
*/

//socket adında bir değişken oluşturuyoruz.
let socket;

//Fonksiyon oluşturup dışarı aktarıcaz.
export const init = () => {
    console.log("Sunucuya bağlanılıyor...");

    //Bu init fonksiyonunu bağlantı sağlıyacağımız yerde kullanıcaz.

    /*
    Yukarıda oluşturduğumuz değişkene bir atama işlemi yapıyoruz.
    Burada ne yapılacak? Gidilecek io'ya doğrudan bir endpoint verirsek eğer oraya ilgili bağlantı işlemini gerçekleştirecektir.

    Bizim backend'imiz 3001 portunda çalışıyor.

    Şimdi o 3001 portuna bağlantı sağlamamı gerekiyor.
    transports parametresinide websocket olarak belirliyoruz.

    */
    socket = io("http://localhost:3001", {
        transports: ["websocket"],
    });

    /*
    Bağlantı işlemi gerçekleştikten sonrada
    connect diyip bunu dinleyebiliriz.
    */
    socket.on("connect", () =>
        console.log("Sunucuya bağlantı başarıyla gerçekleşti.")
    );

    /* 
    Şimdi yazmış olduğumuz bu fonksiyonu gidip App.js dosyamızda kullanıcaz.
    */
}