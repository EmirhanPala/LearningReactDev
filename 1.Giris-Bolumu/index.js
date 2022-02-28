/*
---ES6 MODÜL SİSTEMİ

-JS'nin bir önceki versiyonunda yapamayıpta artık yapabildiğimiz bir takım işlemler var.
Yeni keywordler var.

Örnek:
-ES6'dan önce yapılan import işlemi
var slugify = require("slugify");

--Artık bunu yaparken import ifadesini(keyword) kullanabiliyoruz.
Örnek:
package.json dosyamızda
"type": "module"
tanımını yapmamız gerekecek ve sonrasında
import slugify from "slugify";
olarak kullanabiliriz.
*/

/*
Terminalden
npm install slugify
Yazıp projeme kütüphaneyi ekliyorum.
*/

//İndirmiş olduğumuz modülü projemize dahil edelim.
//www.npmjs.com buradan modüller bulunabilir.
//Slugify bulup örnek kodları çalıştırıyorum.
import slugify from "slugify";
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
//const title = slugify("some string lorem ipsum", "*");
//console.log(title);

/*
Terminal Çıktısı:
> learning-node@1.0.0 start
> node index
some*string*lorem*ipsum
*/

//npm ile modül indirip kurmak bu şekilde!
