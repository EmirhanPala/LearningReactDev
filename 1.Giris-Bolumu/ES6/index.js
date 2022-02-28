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

//import slugify from "slugify";
//const title = slugify("some string lorem ipsum", "*");
//console.log(title);

/*
Terminal Çıktısı:
> es6@1.0.0 start
> node index
some*string*lorem*ipsum
*/

/*
Kendi modülümüzü yazalım.
my-module.js oluşturalım.

--Exportladığımız my-modul.js içindeki fonksiyonumuzu kullanmak için
*/

//import Topla from "./my-module.js";
//console.log(Topla(2, 4));
/*
Terminal Çıktısı: npm start
> es6@1.0.0 start
> node index
6
*/

//Hello ve toplayı böyle içe alabiliriz.
// import {hello, topla} from "./my-module.js";
// console.log(topla(2,4));
// hello();
/*
Terminal Çıktısı: npm start
> es6@1.0.0 start
> node index
6
Hello
*/


//Name adında parametre verdikten sonra çalıştırdıkmı
// import {hello, topla} from "./my-module.js";
// console.log(topla(2,4));
// hello();
/*
Terminal Çıktısı: npm start
> es6@1.0.0 start
> node index
6
Hello undefined
*/
//Undefined yazmasının sebebi bir parametre geçmedik.

// import {hello, topla} from "./my-module.js";
// console.log(topla(2,4));
// hello("Emirhan");
/*
Emirhan diye bir parametre geçersek aşağıda görüldüğü üzere o parametreyi yazdırıyoruz.
Terminal Çıktısı: npm start
> es6@1.0.0 start
> node index
6
Hello Emirhan
*/

// import {hello, topla, cikar} from "./my-module.js";
// console.log(topla(2,4));
// console.log(cikar(4,2));
// hello("Emirhan");
/*
Terminal Çıktısı: npm start
> es6@1.0.0 start
> node index
6
2
Hello Emirhan
*/

//Yeni bir exportlama tekniği ile çıktı alma
//import {hello, topla, cikar} from "./my-module.js";
//Bu çıktıda hello diye bir şeyin olmadığını söylüyor.
//Aslında var fakat şöyle bir şey oldu default olmayarak düz export ettiğimiz tanımları
//{hello, topla, cikar} Bu süslü parantezler içerisinde alabiliyoruz. Default olarak dışarı aktarılanlar düz şöyle aktarılmalı.
// import hello, {topla, cikar} from "./my-module.js";
// console.log(topla(2,4));
// console.log(cikar(4,2));
// hello("Emirhan");
/*
Terminal Çıktısı: npm start
> es6@1.0.0 start
> node index
6
2
Hello Emirhan
*/

// import hello, {topla, cikar, text} from "./my-module.js";
// console.log(topla(2,4));
// console.log(cikar(4,2));
// hello("Emirhan");
// console.log(text);
/*
Terminal Çıktısı: npm start
> es6@1.0.0 start
> node index
6
2
Hello Emirhan
Text
*/


//Dışarıdan bir obje aktarabilirmiyiz?
// import hello, {topla, cikar, text, user} from "./my-module.js";
// console.log(topla(2,4));
// console.log(cikar(4,2));
// hello("Emirhan");
// console.log(text);
// console.log(user);
/*
Terminal Çıktısı: npm start
> es6@1.0.0 start
> node index
6
2
Hello Emirhan
Text
{ name: 'Emirhan', surname: 'Pala' }
*/


//Array yapabilirmiyiz? Evet
//Javascript'te kullanabildiğimiz bütün veri tiplerini kullanabiliriz.
import hello, {topla, cikar, text, user, users} from "./my-module.js";
console.log(topla(2,4));
console.log(cikar(4,2));
hello("Emirhan");
console.log(text);
console.log(user);
console.log(users);

/*
Terminal Çıktısı: npm start
> es6@1.0.0 start
> node index
6
2
Hello Emirhan
Text
{ name: 'Emirhan', surname: 'Pala' }
[
  { name: 'Emirhan', surname: 'Pala' },
  { name: 'Test', surname: 'Deneme' }
]
*/

//Son olarak tek tek exportladıklarımız tek exportta aktaralım.
