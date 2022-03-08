//BİR ÖNCEKİ DERSDEN ÖRNEK VERECEK OLURSAK:

import fetch from "node-fetch";

//Burada 
// fetch("https://jsonplaceholder.typicode.com/users") //fetch diye bir kütüphane yazmışlar. Bir fonksiyonları var.
//     .then((data) => data.json())//Sonra burada then ile devam ediyoruz. Bu then ne demek oluyor? Bu fetch aslında bir promise dönüyor demek oluyor.
//     .then((users) => {
//         console.log("Users Yüklendi!", users)
//     });

//then ile devam eden fonksiyonlar nasıl yazabiliriz?
//ÖRNEK:

// const getComments = () => {
//     //Şimdi burada bir promise return etmemiz gerekiyor. Bu işlemi yapabilmemiz için. Nasıl return edebiliriz promise'ı?
//     return new Promise(() => {
//         //Burada işlemlerimizi artık yapabiliriz.
//         console.log("comments");
//     }) //Tanımını öncelikle koymamız lzm sonrasında parametresinde bir arrow fonksiyon oluşturuyoruz.
// }

// getComments().then(() => console.log("bitti"));
//Kodumuzu çalıştırdığımızda
//comments yazdı bitti logunu neden yazmadı sebebide şu bu promise'ın callback fonksiyonunda resolve ve reject adında iki tane parametre var
//Resolve demek:
//Bu işlem başarıyla gerçekleşmiş al sana data demek
//Reject ise:
//Bu kod çalışırken bir problem oluştu. Bunu reject(reddettim) demek oluyor.
//Şimdi bir promise resolve olduğunda .then içine düşer reject olduğunda catch içine düşer. Buradada hata yakalanır.
//ÖRNEK:

// const getComments = () => {
//     return new Promise((resolve, reject) => {
//         console.log("comments");
//         resolve();
//     });
// };
// getComments()
// .then(() => console.log("bitti"))
// .catch((e) => console.log(e));

//Kodumuzu çalıştırdığımızda comments ve bitti dedi.

//Şimdi yukarıda biz datayı alıyorduk. fetch bize bir data sağlıyordu ve bunu biz kullanıyorduk biz nasıl yapıcaz?
//Promise'yi resolve ederken resolve()'nin içinde parametre geçebiliriz.
//ÖRNEK:

// const getComments = () => {
//     return new Promise((resolve, reject) => {
//         //resolve("Comments"); //Burada sadece string dönmek zorunda değilsiniz numberda dönebilirsiniz. Objede dönebilirsiniz. ÖRNEK:
//         resolve({ text: "Selam" });//Böyle çalıştırdığımız andada obje gelmiş oldu.
//     });
// };
// getComments()
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
//Çalıştırdığımız anda Comments yazdı!

//Şöyle bir şey yapalım. Comments(1) gönderildiğinde resolve olsun 2 gönderildiğinde reject olsun.
// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         if (number === 1){
//         resolve({ text: "Selam" });
//         }
//         reject("Bir problem oluştu!");
//     });
// };
// getComments(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));

//Burada 1 gönderdiğimiz için program resolve olacak anlamına geliyor.
//Resolve oldu ve then içine düştü. 1 yerine 2 gönderirsek
// getComments(2)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
//Bu seferde Bir problem oluştu! şeklinde logu görebiliyoruz.
//Bir promise'i bu şekilde oluşturabiliriz.

//Şimdi önceden axios ile yaptığımız işlemleri promise'mizde dönecek şekilde oluşturmaya çalışalım.
import axios from "axios";
// const getUsers = () => {
//     return new Promise(async (resolve, reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/users");
//         resolve(data);
//     });
// };
// //Bu işlem gibi postları çeken bir tanım daha oluşturalım.
// //Burada ne yapıyoruz sürekli axios kullanmak yerine biraz daha böyle aksiyon arıyoruz ve kendi fonksiyonlarımız üzerinden datayı dönmeye çalışıyoruz. 
// const getPost = (post_id) => {
//     return new Promise(async (resolve, reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
//         resolve(data);
//     });
// };
// getUsers()
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));

// getPost(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));

//Şimdi böyle çalıştırdığımızda bizim bu işlemlerimiz sıralı gitmez çünki yine aynı şey söz konusu
//Burada bir promise var çalıştırıyoruz ve bunlar sıralı değil.
//Bunların ikiside ayrı asenkron fonksiyonlar kendi başlarına hayatlarına devam ediyorlar. Yani bir birlerine bağlı değiller.
//Sıraya koymak istersekde yine burada anonim fonksiyon yazabiliriz.
// (async () => {
//     await getUsers()
//         .then((data) => console.log(data))
//         .catch((e) => console.log(e));

//     await getPost(1)
//         .then((data) => console.log(data))
//         .catch((e) => console.log(e));
// })();
//Bunu böyle tekrar çalıştırdığımızda artık hep sıralı şekilde gelecektir.

//Şimdi biz bunların içindeki then'den ve catch'den kurtulmak istiyorsak şöyle yaparız.
//ÖRNEK:
// (async () => {
//     const users = await getUsers();
//     const post = await getPost(1);

//     console.log(users);
//     console.log(post);
// })();

//Önce userlar sonrada post gelmeli. Ve çalıştırdığımız zaman hep istediğimiz şekilde gelecektir.
//Peki burada bir hata olduğunda hatayı nasıl yakalıyacağız? Az önce catch ile bunu yapıyorduk ama burada nasıl yapacağız ?
//ÖRNEK:
// (async () => {
//     try {
//         const users = await getUsers();
//         const post = await getPost(551);

//         console.log(users);
//         console.log(post);
//     } catch (e) {
//         console.log(e);
//     }

// })();

//Kendimiz resolve yerine bir reject döndürelim ve bakalım.
// const getUsers = () => {
//     return new Promise(async (resolve, reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/users");
//         resolve(data);
//         //reject("Bir sorun oluştu!");
//     });
// };
// const getPost = (post_id) => {
//     return new Promise(async (resolve, reject) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
//         //resolve(data);
//         reject("Bir sorun daha oluştu!");
//     });
// };

//İlk sorun oluştuğu anda doğrudan catch bloguna düştü.
//Üstteki resolve olup alttaki reject olsaydı ne olurdu?
//Bu seferde yine bir sorun daha oluştu yazacaktır.
// (async () => {
//     try {
//         const users = await getUsers();
//         const post = await getPost(1);

//         console.log(users);
//         console.log(post);
//     } catch (e) {
//         console.log(e);
//     }

// })();

//Şimdi burada şöyle bir şey daha yapabiliriz.
//Bunların hepsini birdende çalıştırabiliriz. Nasıl?
//Promise.All diye bir ifade var. O ifade ile bütün promiseları çalıştırıp sonucu bekleyebiliriz.
//ÖRNEK:

//Burada bir array oluşturuyoruz ve buraya bütün promiselarımızı ekliyoruz.

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
        //reject("Bir sorun oluştu!");
    });
};
const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
        resolve(data);
        //reject("Bir sorun daha oluştu!");
    });
};

Promise.all([getUsers(), getPost(1)])
    .then(console.log)
    .catch(console.log);
//Buda elinizde birden fazla sıralı çalıştırmak istediğiniz bir promise dizisi varsa kullanabileceğiniz yöntemlerden biri.