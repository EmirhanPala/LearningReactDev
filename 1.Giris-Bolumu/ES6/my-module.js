// function topla(a, b){
//     return a+b;
// }
//Bu fonksiyonu başka nasıl tanımlayabiliriz?
//Fonksiyon yazmaya başlarken const ifadesini sabit keywordünü kullanıyorum.

// const topla = function topla(a, b){
//     return a+b;
// }

//Function keywordünü kullanmak istemiyorsak arrow function denen bir yapı var
//Örnek:
// const topla = (a, b) => {
//     return a+b;
// }
//Parametre parantezleri ile süslü parantezleri arasına eşittir ve büyüktür ifadelerini koymamız yeterli olacaktır.

//Biraz daha özelleştirebilirmiyiz?
//Eğer return işlemini direkt bir alt satırda yapıyorsak return ifadesine ve süslü parantezlerede ihtiyacımız yok
//Örnek:
//const topla = (a, b) => a + b;

//İşte bu arrow function özelliği ES6 ile gelmiş durumda!

//Bu fonksiyonu index.js dosyasında kullanmak için dışar aktarmamız lzm.
//export default topla;



//Mesela:

// export const hello = () => {
//     console.log("Hello");
// };
//Hello adında fonksiyonumuz olsun return işlemi yapmasın ve void bir fonksiyon olsun. Bir tane log üretsin.
//Bu fonksiyonu kullanmak içinde bunuda dışarı aktarmamız lzm.
//Bir öncekinde en altta export yapmıştık fakat şöylede kullanabiliriz. Keywordlerimizin başına export ekleyip
//Ayrı ayrıda dışarı aktarabiliriz.

// export const topla = (a, b) => a + b;

/*
Peki ayrı ayrı export yazmaktansa
Şöyle yapabilirmiyiz?
*/
// const hello = () => {
//     console.log("Hello");
// };
// const topla = (a, b) => a + b;

// export {
//     hello,
//     topla
// }
//Elbette yapabiliriz.

/*
const hello = () Burada biz bir parametre almıyoruz.
name adında bir parametre alalım.
*/

// const hello = (name) => {
//     console.log("Hello " + name);
// };
// const topla = (a, b) => a + b;

// export {
//     hello,
//     topla
// }


/*
Tek bir parametre varsa fonksiyonumuzda parametre parantezlerinede ihtiyacımız yok!
*/

// const hello = name => {
//     console.log("Hello " + name);
// };
// const topla = (a, b) => a + b;

// export {
//     hello,
//     topla
// }

//ES6 ile hayatımıza gelen yeni bir özellikde şu

// const hello = name => {
//     console.log("Hello " + name);//Bunu farklı şekildede yazabililiriz.
//     console.log(`Hello ${name}`);//Backtik oluşturuyoruz AltGr+Virgül
// };
// const topla = (a, b) => a + b;

// export {
//     hello,
//     topla
// }

//Yeni bir fonksiyon yazalım

// const hello = name => {
//     console.log(`Hello ${name}`);
// };
// const topla = (a, b) => a + b;
// const cikar = (a, b) => a - b;

// export {
//     hello,
//     topla,
//     cikar
// }

//Yeni bir exportlama ile çıktı alma
// const hello = name => {
//     console.log(`Hello ${name}`);
// };
const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;
//Dışarıya fonksiyon değilde düz bir string aktarmak için
const text = "Text";
//Dışardan obje aktarma
const user = {
    name:"Emirhan",
    surname:"Pala"
};
const users = [{
    name:"Emirhan",
    surname:"Pala"
},{
    name:"Test",
    surname:"Deneme"
}];
//export default hello;

//Son olarak tek tek exportladıklarımız tek exportta aktaralım.
//Export defaultuda dışarı aktarmak içinde şöyle bişiy kullanabiliriz.
export default name => {
    console.log(`Hello ${name}`);
};
//Şu şekildede dışarı aktarabiliyoruz.
export {
    topla,cikar,text,user,users
}
