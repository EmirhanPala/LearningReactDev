/*
Prop Types: isRequired
Bu koşulu eklediğimizde değerlerin girileceği alanlar zorunlu hale geliyor.
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
 name: PropTypes.string.isRequired,
 surname: PropTypes.string.isRequired,
 isLoggedIn: PropTypes.bool.isRequired,
 age: PropTypes.number.isRequired,
 friend: PropTypes.array,
}

export default User;