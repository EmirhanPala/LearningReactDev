/*
Javascript'in direk kendinde olan bir kaç fonksiyon var.
*/

/*
Bu fonksiyonun yaptığı işlem verilen parametredeki süre tamamlandıktan sonra bir kere çalışıyor olması.
2 Parametre istiyor bizden. 1'de fonksiyon olacak 2'de milisaniye cinsinden değer girmemizi isteyecek.
Örnek:
*/
// setTimeout(() => {
//     console.log("Merhaba");
// }, 2000);
/*
Terminal Çıktısı: node callback.js
2 Saniye sonra ekrana alttaki kelimeyi yazıyor.
Merhaba
*/

//Bir diğeri setInterval bu fonksiyonda benzer şekilde parametrelerini alıyor.
// setInterval(() => {
//     console.log("Merhaba ben her saniye çalışacağım.");
// }, 1000);
//1000 ms = 1 Saniye 
//İntervalde yapılan şey verilen parametrede her periyodda çalışıyor olması durdurulmazsa sonsuza kadar çalıştırılır.
/*
Terminal Çıktısı: node callback.js
Her saniye alttaki kelimeyi yazıyor.
Merhaba ben her saniye çalışacağım.
Merhaba ben her saniye çalışacağım.
Merhaba ben her saniye çalışacağım.
Merhaba ben her saniye çalışacağım.
*/

// const sayiHi = () => {
//   console.log("Merhaba");
// };
//merhabaDe();
/*
Terminal Çıktısı: node callback.js
Merhaba
*/

//Parametre göndericez o parametre bir fonksiyon olacak ve o fonksiyonu buradan alıp kullanamaya çalışıcaz.
// const sayiHi = (cb) => { //Burda bir callback parametresi alırsak ve o callback'i 
//     cb(); //böyle kullanırsak
// };
// sayiHi(() => {//Parametre olarak fonksiyon göndermiştik işte o fonksiyon cb ye düşüyor. ve yukarda cb(); olarak çalıştırıyoruz.
//     console.log("Hello");
// })
/* Yine yukardaki gibi aynı şekilde çalışmaya devam ediyor.
Terminal Çıktısı: node callback.js
Hello

Napmış olduk?
Parametre olarak bir fonksiyon geçtik ve onu ilgili fonksiyon içerisinde çalıştırmayı sağladık.
Peki bu bizim ne işimize yarayacak ?
*/

/*
Adım 3:
Javascript'te her hangi bir veri kaynağına gidip veri çekebilmek için bize verilmiş olan native(yerli) fonksiyon var.
ismi fetch bu gidiyor her hangi bir veri kaynağına bağlanıyor. Her hangi bir end point'i oradan veriyi alıp bize gösteriyor.
Örnek Bulalım: 
jsonplaceholder.typicode.com
Burada bize verilmiş bir end point var. Deneme yapmak amaçlı Bir json çıktı dönüyor bize
Ve biz bu içeriğe erişmeye çalışıcaz nodejs projemiz aracılığıyla.

Örnek:
Yazdığımız kodu kullanabilmemiz için node-fetch kurmamız gerekiyor.
Terminale: "npm i node-fetch" yazıp modülü yüklüyoruz.
*/

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users") //Api'den bize data döndükten, (response döndükten) sonra 
//     .then((data) => data.json()) //(data)'ya apiden ne geliyorsa o getiriliyor. Sonra bu native fetch kütüphanesi bize doğrudan json dönmüyor.
//     //data.json() olarak onu json'a parse etmemiz gerekiyor. Ve bize bir data dönüyor.
//     .then((users) => console.log(users));//Data burdaki (users)'a düşüyor. Bizde oradan alıp kullanmaya devam ediyoruz.
//fetch işlemi bu şekilde yapılıyor.

//Yeni bir işlem daha yapalım.
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => { //Bu içerde yani callback'de yeni bir fetch işlemi yapalım.
//         console.log("Users Yüklendi!", users)
//         fetch("https://jsonplaceholder.typicode.com/posts/1")//Tekrardan fetch işlemi yapıyoruz.
//             .then((data) => data.json())
//             .then((posts) => console.log("Postlar Yüklendi!", posts));
//         //Burada diyoruzki ilk işlem bitsin users'ları çeksin ve o işlem bittikten sonra bu olsun dediğimiz için bu then'in içinden yazıyoruz.
//     });
//Önce userlar sonra postslar yüklenecek.
//Bu işlemi dışarda yapıcak olsaydık.

//Bunların ikiside asenkron olduğu için yani bunların ne zaman cevap döneceğini bilmiyoruz.
// fetch("https://jsonplaceholder.typicode.com/users")//1. Belki bu 1 saniyede dönüyor
//     .then((data) => data.json())
//     .then((users) => {//5. Veya buradaki users'ın içindeki dataya bağlı olabiliriz.
//         console.log("Users Yüklendi!", users)//3. Ama biz önce bu logu görmek istiyor olabiliriz.
//     });
// fetch("https://jsonplaceholder.typicode.com/posts/1")//2. Bu yarım saniyede dönüyor olabilir.
//     .then((data) => data.json())
//     .then((posts) => console.log("Postlar Yüklendi!", posts));//4. Sonra bu logu görmek istiyor olabiliriz.
//6. O yüzden bu işlemleri sıraya koymamız gerekiyor olabilir.
//Bu kodu çalıştırdığımızda bazen users önce gelecektir veya posts önce gelecektir.

/*
Buradaki amacımız işlemleri sıraya koymak. O yüzdende callback fonksiyonlar içerisinde yeni tanımlar yaparak ilerleye biliyoruz.
Yada şöyle bir durumda mümkün fetch işleminde karmaşıklık görüyorsanız daha da karmaşıklaştıralım
Örnek: 
*/
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("Users Yüklendi!", users)
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((posts) => {
//                 console.log("Post 1 Yüklendi!", posts)

//                 fetch("https://jsonplaceholder.typicode.com/posts/2")
//                     .then((data) => data.json())
//                     .then((data) => console.log("Post 2 Yüklendi!", data))
//             });
//     });
//Çalıştırdığımızda hepsi sırayla gelir çünki bu işlemleri sıraya koyduk.
//Az önce yukarıda yaptığımız gibi yaparsak. Sıraya koymazsak.
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("Users Yüklendi!", users)

//     });

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => data.json())
//     .then((posts) => {
//         console.log("Post 1 Yüklendi!", posts)


//     });

// fetch("https://jsonplaceholder.typicode.com/posts/2")
//     .then((data) => data.json())
//     .then((data) => console.log("Post 2 Yüklendi!", data))

//Normalde users sonra post1 sonrada post 2 yüklenmesini bekleriz?
//İşte javascript öyle çalışmıyor. Ve test ettiğimizde karışık geliyor. Her seferinde daha farklı gelecektir.
//İşlemleri sıraya koymak için dikkat etmemiz gereken bir durum bu javascript için

//İşlemleri sıraya almak istiyorum ama bu kod oldukça karmaşık görünüyor diyenler için
//Buradada karşımıza yeni bir tanım çıkıyor. Bu tanımda async/await keywordleri
//Bu keywordleri kullanarak bu yazdığımız kodun çok daha temizini yazabiliyoruz.

//ÖRNEK: getData isminde asenkron bir fonksiyon yazalım.

// async function getData() {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log(users);
//     console.log(post1);
//     console.log(post2);
//     //Burada kodu her çalıştırdığımızda bu sıralamaya bağlı olarak kodumuz düzenli bir şekilde çalışacaktır.
// }
// getData();
//Yukarıdaki yapıyla aşağıdaki yapıyı incelerseniz arada büyük farklar olduğunu görebilirsiniz. (Okuma anlamında) çalışma anlamında bir farklılık yok!

//Yukarıdaki gibi getData isminde fonksiyon kullanmak istemiyebilirsiniz. Yukarıda olduğu gibi doğrudan çalışsın diyebilirsiniz.
//Burada şöyle bir durum var async ifadesini kesinlikle yazmanız lazım. Bir fonksiyon mutlaka olmalı elinizde
//İllada bu isimde bir fonksiyonunuzun olmasını istiyorsanız anonim fonksiyon oluşturabilirsiniz.
//ÖRNEK:

(async () => {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

    console.log(users);
    console.log(post1);
    console.log(post2);
})();

//Ve şimdi çalıştırdığımızdada yine aynı sonucu görüyoruz.

