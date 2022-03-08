import { useEffect, useState } from 'react'

/*
    Link: https://jsonplaceholder.typicode.com/users

    Şimdi bu veriye ne zaman erişmek istiyoruz?
    Users componentimiz mount edildiği anda o veriye erişmek için gerekli olan isteği başlatmak istiyorum.
    Artık o istek ne zaman sonuçlanırsada ekranımda göstermiş olucam.
*/

function Users() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        /*
        Bize veri kaynağına erişebilmek için native(yerli) bir tanım veriliyor.
        fetch adında bir tanım var. Biz bu fetchi kullanarak ek her hangi bir kütüphane kullanmadan gerekli veri kaynağına erişe biliyoruz.
        */
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            /* Örnek 1 Loading:
            .then((data) => {
                setUsers(data);
                setIsLoading(false);
            });
            */
           .then((data) => setUsers(data))
           .catch((e) => console.log(e))
           /*
           Finally kısmında yani eğer .then((data) => setUsers(data)) then'e düşmezsek doğrudan catch kısmına düşersek isLoading sürekli 
           true olarak kalacak. Bunu istemeyiz. Bunun önüne geçmek için hem then içine hemde catch içine belki setIsLoading(false) diye
           konulabilir ama onu yapmaktansa tek bir yerde bu işlemi yapmak daha mantıklı.
           Aşağıdaki gibi setIsLoading'i false'ye çekersek aynı işlemi yapmış olucaz.
           */
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