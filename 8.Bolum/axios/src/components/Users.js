/*
Native fetch ile yapabildiğimiz bütün işlemleri aslında farklı kütüphaneler kurarakda yapabiliyoruz.
En çok bilineni: axios
Axios'u kullanarak yine fetch ile yaptığımız ne varsa her birini yapabiliyoruz.
Aralarında çok büyük bir farklar yok.
Ne fark var? Neden fetch i yada axios'ı tercih etmeliyim gibi. 
fetch kullandığımız zaman bize body'i json olarak vermiyor. stringify olarak veriyor.
dolayısıyla bizim bunu elle json'a çevirmemiz gerekiyordu.
Axios'da öyle bir durum yok buradan body'i bize obje olarak dönüyor.
Axios'u kullandığımızda her hangi bir siteyi iptal edebiliriz veya timeout belirleyebiliriz. Fetch'de bu durum söz konusu değil
Birde axios'un daha geniş bir browser desteği var. Fetch'de ise açıklamalarında gördüğünüz sınırlamalarla karşınıza çıkıyor.

Axios'u kullanabilmemiz için modül olarak kurmamız gerekiyor.
npm i axios
Yüklendikten sonra...
Fetch ile yaptıklarımızı axios'a çevirelim.
*/
import { useEffect, useState } from 'react'
import axios from "axios"
function Users() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));
    }, [])
    return (
        <div>
            <h1>Users</h1>
            {isLoading && <div>Loading...</div>}
            {users.map((user, i) => (
                <div key={i}>{user.name}</div>
            ))}
        </div>
    )
}

export default Users