import PropTypes from "prop-types";
/*
Default Props
Her hangi bir tanım yapılmamış. Bir prop'a varsayılan bir değerde verebiliyoruz.
Örnek:
Değer yazılmamış prop'a veya prop gönderilmemiş ise otomatik olarak varsayılan atadığımız değeri veriyor.

*/

function User({ name, surname, isLoggedIn, age, friends, adress }) {
    //console.log(props);
    if (!isLoggedIn){
        return <div>Giriş yapmadınız.</div>
    }
    return (
        <>
            <h1>
                {
                    `${name} ${surname} ${age}`
                }
            </h1>

            
            <br/>
            <br/>
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
        PropTypes.string
    ]).isRequired,
    friend: PropTypes.array,
    adress: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    }),
};

User.defaultProps = {
    isLoggedIn: false
}

export default User;