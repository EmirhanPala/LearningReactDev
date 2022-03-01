/*
Gönderdiğimiz bütün propertyler fonksiyonumuzda yazıcağımız props paremetresine düşüyor.
function User(props) kullanıp bütün değişkenlerin başına props yazmak yerine
props'un bir obje olduğunu biliyoruz o yüzden 
function User({name, surname, isLoggedIn}) şeklindede kullanabiliriz.
*/

//Örnek2:
//Burada gönderilen propertylerin sırasıyla karşıladığımız sıranın hiç bir anlamı(önemi) yok her hangi bir sırayla alıp kullanılabilir.
function User({name, surname, isLoggedIn, age}) {
    //console.log(props);
    return(
    <h1>
        {
            isLoggedIn ? `${name} ${surname} ${age}` : "Giriş yapmadınız."
        }
    </h1>
    );
}

/* Örnek1:
function User(props) {
    //console.log(props);
    return(
    <h1>
        {
            props.isLoggedIn ? `${props.name} ${props.surname}` : "Giriş yapmadınız."
        }
    </h1>
    );
}
*/

export default User;