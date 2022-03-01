import PropTypes from "prop-types";
/*
shape
Obje olarak gönderdiğimiz propertylerde kullanabileceğimiz shape adında bir tanım daha var.
*/

function User({ name, surname, isLoggedIn, age, friends, adress }) {
    //console.log(props);
    return (
        <>
            <h1>
                {
                    isLoggedIn ? `${name} ${surname} ${age}` : "Giriş yapmadınız."
                }
            </h1>

            {adress.title} {adress.zip}
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
        zip: PropTypes.number
    })
}

export default User;