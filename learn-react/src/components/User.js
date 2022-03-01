import PropTypes from "prop-types";
/*
Prop Types: oneOfType
Bir property'de birden fazla veri tipinin gönderilmesine imkan tanımak için oneOfType adında bir tanımımız daha var.
Örnek: age ile matematiksel işlem yapmıyacaksak eğer hem string hemde number kabul edebiliriz.
oneOfType ile birden fazla veri tipi kabul edilebilir.
*/
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
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([
        PropTypes.number,
        propTypes.string
    ]).isRequired,
    friend: PropTypes.array,
}

export default User;