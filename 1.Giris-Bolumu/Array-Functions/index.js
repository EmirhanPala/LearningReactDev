/*
    push    = Array'in sonuna yeni bir eleman ekler.
    map     = Array içerisinde tek tek dönüyor.
    (Normalde array döndürmek for döngüsü kullanırdık.)
    (Map fonksiyonu diyorki lenght vermene ve for döngüsünü kullanmana gerek yok array'in bütün elemanlarını dönücem diyor.)
    find    = Array'in içerisinde verilen koşullarla arama yapar. (Bulduğu ilk kaydı getirir.)
    filter  = Filtreleme yapıyor. Örn: İsmi emirhan olanları getir gibi bütün kayıtları getirir.
    some    = Array'in içerisindeki elemanlardan biri verdiğimiz koşullara uyuyorsa "true" döner uymuyorsa "false" döner.
    every   = Some komutunun kardeşidir. (Array'in bütün elemanlarının şarta uymasını bekliyor.)
    include = Array'in içerisinde girilen ifade varmı yokmu kontrol etmemizi sağlayan ifadedir.
*/

const users = ["Mehmet", "Ahmet", "Murat"];

//Pust Kullanımı: Arrayin sonuna eleman ekliyor.
// users.push("Ayşe");
// users.push("Fatma");
// console.log(users);

//Map: View compenentlerde en sık kullanılan fonksiyon bu
//Yaptığı işlem: Array içinde tek tek dönüyor.
//For döngüsünde başlangıç ve bitiş kullanırken map'de böyle bir şey kullanmaya gerek yok.
//Örnek array kullanımı:
// for (let i = 0; i < users.length; i++) {
    // console.log(users[i]);
// }
//Map fonksiyonu diyorki length elle vermene gerek yok ben senin elemanlarının hepsini dönücem diyor.
// users.map((item) => {
    // console.log(item);
// })

//Arrayin içerisinde objeler olsaydı
const users = [{
    name:"Emirhan",
    age: 10
},{
    name:"Emirhan",
    age: 29
},{
    name:"Deneme",
    age: 40
}];

// users.map((item => {
    // console.log(item);
// }));

//item altındaki name'i yazdırmak içinse
// users.map((item => {
    // console.log(item.name);
// }));

//Find:
//Arrayin içerisinde verilen koşullarla arama işlem yapar.
//İlk elemanı bulduğunda response'yi döner. Alttaki komut ilk bulduğu kaydı yazar.
// const result = users.find((item) => item.name === "Emirhan" && item.age > 20);
// console.log(result);

//Filter: Sık kullanılan method
//Filtreleme yapar. Çalışma şekli: İsmi emirhan olanları getir veya yaşı 20 den büyük olanları getir gibi vs vs.
//Find gibi tek kayıt getirmez hepsini getirir.
//Örnek kullanım 1:
//const filtered = users.filter((item) => item.name === "Emirhan" && item.age < 20);

//console.log(filtered);
//Örnek kullanım 2:
// const filtered = users.filter(
    // ({name, age}) => name === "Emirhan" && age < 20);
// console.log(filtered);

//Some: 
//Her hangi biri uyuyorsa yani: array'in içerisindeki elemanlardan biri koşula uyuyorsa true döner
//Uymuyorsa false döner.
// const soming = users.some(
    // ({age}) => age === 15);
// console.log(soming);

//Every: Some'in kardeşi
//Array'in bütün elemanlarının şarta uymasını bekliyor.
// const every = users.every(
    // ({age}) => age > 15);
// console.log(every);

//includes:
//Yaptığı işlem içinde geçiyormu? geçmiyormu? onu kontrol etmemizi sağlıyor.
//Buna göre true ve false yazıyor.
//Örnek:
const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("muz");
console.log(isIncluded);