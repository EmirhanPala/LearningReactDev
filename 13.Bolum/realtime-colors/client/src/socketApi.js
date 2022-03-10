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

/* 
Sunucuya bağlantı işlemlerini gerçekleştirdik şimdide sayfamız üzerinden renk seçildiğinde ve butona basıldığında bunu backend'imize iletebileceğimizi göreceğiz.

Şimdi buradada backend'e bir mesaj gönderebilmek için gerekli olacak fonksiyonumuzu yazıyoruz.
*/

export const send = (color) => {
    /* 
    socket.emit: Bu methodun yaptığı şey | Eğer clienttaysak backend'e - backenddeysek client'a bir data göndermeyi sağlıyor.
    
    2 Parametre yazılacak.
    ----
    1.Data hangi kanala gönderilecek.
    2.Data ney?

    Backendde newColor olarak karşılıyormuşuz. O yüzden bizim bunu newColor kanalına göndermemiz lazım.
    Ayrıca backendde color diye parametre alıyoruz. O kullanılıyor.
    */
    socket.emit("newColor", color);

    //Şimdi bu send fonksiyonunu palatta.js'de kullanmaya çalışıcaz.
}