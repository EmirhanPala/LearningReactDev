/*
2 tane import işlemi yapıcaz.

1 tanesinde bir componenti render edicek.
diğerinde bir butona tıklama işlemleri yaptıracak tanımları kullanıcaz.

*/
import { render, screen } from '@testing-library/react';
//Render ile componentleri render edebiliyoruz.
//Screen ilede o anda dom'da olan her hangi bir nesneyi alabiliyoruz.
import userEvent from '@testing-library/user-event';

import Counter from './index';

//Bir test kodu yazmaya başlamak için yapılması gereken şey:
//it adında bir ifade var neden it 
/*
Test kodu yazarken butona basıldığında sayı bir artmalı
butona basıldığında bişiyler olmalı diyoruz ya
it'in anlamıda şu 
it should be a valid email address | geçerli bir email adresi olmalı diyorsunuz
it ifadesini açıklamada yazdırmaktansa bunu bir fonksiyon haline getirelim demişler aslında mantık oradan geliyor.
*/

//Örnek-1:
/*
test("increase btn", () => {
//callback yazıyoruz. Bunun içerisindede yapmak istediğimiz test otomasyonunu yazmamız gerekiyor.
render(<Counter />);
//Counter componentini render ettik ve bunun üstünde bir takım işlemler yapıcaz. Örnek: Bir butona bastırıcam. 
const count = screen.getByText("0");//İçinde 0 yazan tanımı bul dedik aslında elementi bul.
const increaseBtn = screen.getByText("Increase"); //Şuanda bu komutla ekrandaki Increase butonunu seçtik.
//Bu butona işlem yaptırmak içinde ne yapıcaz o butona tıklattırıcaz.
userEvent.click(increaseBtn); //Butona bastık şimdi bir şeyleri beklettiricez.
//Yani butona bastırdık ne olmasını bekliyoruz? Onu belirliyicez.
expect(count).toHaveTextContent("1");//Count'un değerinin 0 dan 1 olduğundan emin olalım diyicez.
//Buradaki fonksiyonlarda aslında semantic olarak isimlendirilmiş.

});

//Aynısını diğer buton için yapalım.
test("decrease btn", () => {
    render(<Counter />);
    const count = screen.getByText("0");
    const decreaseBtn = screen.getByText("Decrease"); 
    userEvent.click(decreaseBtn); 
    expect(count).toHaveTextContent("-1");
    });
*/

//Örnek-2:
describe("Counter Tests", () => {
/*
describe ifadesini kullandığımız zaman bir takım yeni yetenekler kazanıyoruz.
mesela describe içindeki bütün testler için şunu diyebiliriz.

Bütün testler çalışmadan önce yani her biri çalışmadan önce, çalıştıktan sonra veya şunları yap diyebiliriz.
*/
    let increaseBtn, decreaseBtn, count;
    beforeEach(() => {
        console.log("Her testten önce çalışacağım!");
        render(<Counter />);
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
        count = screen.getByText("0");
    })//Her biri çalışmadan önce 

    beforeAll(() => {
        console.log("İlk başta bir kere çalışacağım!");
    });//Tüm testlerden önce bir defaya mahsus çalışıyor ve sonra çalışmıyor.

    afterEach(() => {
        /* 
        Burada ne yapılabilir?
        beforeEach'te bir kayıt ekliyorsanız veritabanına afterEach ilede onu kaldırabilirsiniz.
        */
       console.log("Her testten sonra çalışacağım!");
    });//Her testten sonra çalıştırmak için kullanılır.

    afterAll(() => {
        console.log("En son bir kere çalışacağım!");
    });//Her şeyden sonra

    test("increase btn", () => {
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    });

    test("decrease btn", () => {
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    });

});