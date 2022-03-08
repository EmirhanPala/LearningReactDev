/*
Input için State Tanımı Yapmak:

Burada bir tane inputumuz olacak. Bu inputun içerisine bir veri girilmeye başlandığı anda biz o ilgili veriyi
state'imizede yazmaya çalışacağız.

Input'a bir veri girildiğinde onChange olduğunda Input gidip. O Inputun içindeki data'yı state'imizede yazmamız gerekiyor.

onChange olayıyla alakalı detayları bize veren bir event var. onChange'den bu dönüyor.
Sonra o Inputun içerisindeki ifade ettiği değeri state'imize yazmak istiyorsakda event.target.value kullanmamız gerekiyor.

<input value={name} onChange={(event) => setName(event.target.value)} />
Böyle yazmak zorundada değiliz. Şöylede yazabiliriz.
const onChangeName = ((event) => setName(event.target.value));

Bir tane daha field'ımız olursa peki ne olacak?
const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const onChangeName = ((event) => setName(event.target.value));
    const onChangeSurname = ((event) => setSurname(event.target.value));
    
    return (
        <div>
            Name <br />
            <input value={name} onChange={onChangeName} />
            <br />
            <br />

            Surname <br />
            <input value={surname} onChange={onChangeSurname} />
            <br />

            {name} {surname}
        </div>
    );

    
    Onlarca inputumuz olursa peki oldukça zahmetli olmazmı?
    Bu state'i birden fazla yazmak yerine tek bir state'e indirdik.
    Sonra buradaki fonksiyonu teke indirdik.
    Ayın şekilde aşağı tarafta kullanırkende onChangedede her defasında dolayısıyla aynı
    fonksiyonu vererek işi kurtarmış olduk.
*/


import { useState } from 'react';

function InputExample() {

    const [form, setForm] = useState({
        name:"",
        surname:""
    });

    const onChangeInput = (e) => {
        console.log(e.target.name);

        setForm({ ...form, [e.target.name]: e.target.value })
    };

    return (
        <div>
            Name <br />
            <input name="name" value={form.name} onChange={onChangeInput} />
            <br />
            <br />

            Surname <br />
            <input name="surname" value={form.surname} onChange={onChangeInput} />
            <br />

            {form.name} {form.surname}
        </div>
    );
}

export default InputExample