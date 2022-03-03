import { useEffect, useState } from 'react';

import List from './List';
import Form from './Form';

function Contacts() {
    const [contacts, setContacts] = useState([]);

    /*
    Contacts'e bir atama yapıldığında o son güncel halini görmeye çalışalım.
    useEffect:

    Form componentinde form submit edildiğinde ekleme işlemi yapıyoruz ya
    Bu ekleme işlemi yapıldıktan sonra bu elimizdeki array'in son halini görmek için yazıyoruz.

    Test sonucu kayıt eklerken birin üstünde kayıt eklediğimizde bir kayıt gösteriyor.
    
    Bunun için formumuza contacts={contacts} ekliyoruz ve son olarakta submit içerisindeki
    arrayimizede ...contacts, form ifadesini yazdığımızda sorun çözülmüş oluyor.
    */
    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div>
            <List />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts