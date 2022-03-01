/*
Prop Types:
Componentlere gönderdiğimiz propertylerin tiplerini belirleyebileceğimiz bir araç var.
Adı: Prop-Types 
Yaptığı İşlem:
App.JS'den gönderdiğimiz propertyleri örnek name string, surname string, isLoggedIn bool, age number ve friends array olarak gönderiliyor.
Bu yazdığımız componentleri sadece biz kullanmıyacağız bir takım arkadaşımız kullanabilir. Veya bu componenti bütün dünya ile paylaşabiliriz.
Bütün insanlık bunu kullanabilir. Dolayısıyla biz hangi property'de hangi veri tipini aldığımızı(kabul ettiğimizi) componentte belirtmemiz lazım.
Nasıl Kullanılır?
*/

import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, age, friends }) {
    //console.log(props);
    return (
        <>
            <h1>
                {
                    isLoggedIn ? `${name} ${surname} ${age}` : "Giriş yapmadınız."
                }
            </h1>

            {
                friends.map((friend) => {
                return <div key={friend.id}>{friend.id} - {friend.name}</div>
                })
            }
        </>
    );
}

User.propTypes = {
 name: PropTypes.string,
 surname: PropTypes.string,
 isLoggedIn: PropTypes.bool,
 age: PropTypes.number,
 friend: PropTypes.array,
}

export default User;