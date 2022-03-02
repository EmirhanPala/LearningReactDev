import { useState, useEffect } from "react";

function Counter() {

    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Emirhan");

    /*
      Arrow fuctionu yazdıktan sonra bir virgül atıp ikinci parametrede array açıp kapatma yapmamız gerekiyor.
      Bunun adı Teknik Termanilojide dependency array olarak geçiyor.(Bağımlılık array'i) olarak geçiyor.
      Eğer [] bunu boş bırakırsak içine bir şey yazmaksak anlamı nedir?
      Component mount edildiği anı yakalarsın demek oluyor.
    */

    useEffect(() => {
        console.log("Component mount edildi!");
        //number'in değerini her saniye 1 er 1 er arttıralım.

        const interval = setInterval(() => {
            //Trick(Hile,Kandırmak vs.) öğrenelim setNumber içerisinde arrow function oluşturduğumuzda
            //() parantez içine yazdığımız n aslında numberin o anda ifade etmiş olduğu değer oluyor.
            setNumber((n) => n + 1);
        }, 1000);
        /*
        Toggle Countere bastığımızda component kayboluyor ama çalışmaya devam ettiği için hata veriyor.
        Nedeni: Bizim burada bir asenkron bir işlemimiz var her saniyede bu güncelleme işlemi yapılıyor.
        O zaman mantık şu olmalı.
        Bu component unMount edildiği anda bu setInterval'i bizim durdurmamız gerekiyor.

        En aşağıda return işlemi yaptığımızda componentin unmount edildiğini anlayabiliyoruz.
        Bu yine class componentlerde ayrı bir fonksiyon olarak ayrı özel tanımlı fonksiyon olarak kullanılıyordu.
        Artık öyle bir yapıya gitmektense daha temiz bir şekilde didmount'un içinde bunu bize vermişler.
        */

        /*
        Oluşturulan atanan intervali durdurmamız lazım
        durdurmak içinde javascript bize clearInterval adında bir fonksiyon daha veriyor.
        Buna parametre olarak intervali vermemiz yeterli olacaktır.
        */
        return () => clearInterval(interval);//console.log("Component unmount edildi!");

        /*
        Bunu nerelerde kullanabiliriz?:
        Bir componentiniz var o component mount edildiği anda bir web socket bağlantısı başlatıyor.
        Fakat o componenti kapattığınız andada web socket bağlantısını eğer kapatmazsanız 
        Sürekli olarak napar?
        Yani ilgili o web socketten gelen datayı componentin içerisinde bir yerde yazıyorsunuz gösteriyorsunuz diyelim.
        Eğer o web socket bağlantısını kapatmazsanız. Sürekli arka planda aslında yine o dom'a yazmaya çalışacaktır ve yine
        console'da hataları alacaksınız.
        Veya bu tip interval işlerinde kullanabilirsiniz.
        Componenti unmount ettikten sonra o componenti tekrardan güncellemeye çalışabilecek ne varsa aslında onları o işlemleri
        durdurmanız özellikle gerekiyor.
        */
    }, []);

    //Bu ifade sadece state'nin güncellendiği anda yazacağı anlamına geliyor.
    // useEffect(() => {
    //   console.log("State güncellendi!");
    // })
    //Number güncellendiğinde bundan haberdar olmak istiyorsak ne yapabiliriz?
    //Hangi state'nin değişimini yakalamak istiyorsak bunun içine [] onun değerini vermemiz gerekiyor.
    // useEffect(() => {
    //   console.log("Number state güncellendi!");
    // }, [number]);
    //Sadece Number ve Name statesinin güncellendiğini görmek için
    // useEffect(() => {
    //   console.log("Number veya Name state güncellendi!");
    // }, [number, name]);
    //[] Array'in içerisine istediğimiz kadar state elemanını ekliyebiliriz.

    //Ayrı görüntülemek içinde
    useEffect(() => {
        console.log("Number state güncellendi!");
    }, [number]);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
        </div>
    )
}

export default Counter