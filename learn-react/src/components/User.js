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
                //Örnek 2:
                //friends.map((friend) => <div key={friend.id}>{friend.id} - {friend.name}</div>)
                //Örnek 3: Böylede yazdırılabilir.
                friends.map((friend) => {
                return <div key={friend.id}>{friend.id} - {friend.name}</div>
                })

                //Örnek 1:
                //friends.map((friend, index) => <div key={index}>{index} - {friend}</div>)
            }
        </>
    );
}

export default User;