import { useState, useEffect } from 'react';
import Contacts from '..';

/* 2: 
Buradaki kayıtları bir state'e eklemek gerekiyor.
List componentinde onları listeleyebilelim. 
Eğer kullanıcı kayıtlarını form componentleri içerisindeki bir statede tutarsak
Bu state'yi List componentine nasıl taşıyabiliriz? Böyle bir problemimiz var.
O yüzden biz o state'yi yani kullanıcıların ekleneceği state'yi eğer bu contacts componentinde tutarsak ve
Bu state'ye ekleme(set) işlemi yapılacak olan fonksiyonu eğer form componentine geçersem problem kalmayacak.

*/
const initialFormValues = { fullname: "", phone_number: "" }
function Form({ addContact, contacts }) {
//console.log(addContact);
    const [form, setForm] = useState(initialFormValues);
    
    /*
     contacts değişmiş ise eğer inputun içini boşalt diyebiliriz.
     Bu değiştiğinde ne demektir.
     Bi kayıt eklendiyse eğer o kayıttan sonra ekleme işleminden sonra temizleme yapabilirim demek.

     setForm işlemini onSubmit içinden alıp useEffect içine ekleyebiliriz.
    */
    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    //SetForm işlemini onSubmit'de yapmak istemiyorsak bunu yan etkileri kullanarak yapmak istiyorsak. useEffecti dahil ettikten sonra
    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === "" || form.phone_number === ""){
            return false;
        }
        addContact([...contacts, form]);
    }

    return (
        /* 1:
        form elementinin(etiketinin) varsayılan bir davranışı var. Bu davranış nedir?
        Bu formun gideceği bir endpoint olur o endpointi gider veriyi oraya gönderir veya çeker.
        */
        <form onSubmit={onSubmit}>
            <div>
                <input name="fullname" placeholder='Full Name' value={form.fullname} onChange={onChangeInput}></input>
            </div>
            <div>
                <input name="phone_number" placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput}></input>
            </div>
            <div className='btn'>
                <button onClick={onSubmit}>Add</button>
            </div>
        </form>
    )
}

export default Form