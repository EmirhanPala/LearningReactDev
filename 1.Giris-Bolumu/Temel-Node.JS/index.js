/*
Terminalden
npm install slugify
Yazıp projeme kütüphaneyi ekliyorum.
*/

//İndirmiş olduğumuz modülü projemize dahil edelim.
//www.npmjs.com buradan modüller bulunabilir.
//Slugify bulup örnek kodları çalıştırıyorum.
var slugify = require("slugify");
//const title = slugify("some string");
//console.log(title);
//Terminal üstünden npm start yazıp test ediyorum.

/*
Terminal Çıktısı:
> learning-node@1.0.0 start
> node index
some-string
*/

//İkinci parametredede otomatik tanımladığı - yerine artık boşluk bulduğu yerlere * yazıcak.
const title = slugify("some string lorem ipsum", "*");
console.log(title);

/*
Terminal Çıktısı:
> learning-node@1.0.0 start
> node index
some*string*lorem*ipsum
*/

//npm ile modül indirip kurmak bu şekilde!
