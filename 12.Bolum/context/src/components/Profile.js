import { useContext, useState } from 'react'

import UserContext from '../context/UserContext';

function Profile() {
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    //console.log(data);
    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({ id:1, username: "epala", bio: "lorem ipsum"});
            setLoading(false);
        }, 1500);
    };
    const handleLogout = () => {
        setUser(null);
    };
    return (
        <div>
            {
                !user && <button onClick={handleLogin}>{loading ? "Loading..." : "Login"}</button>
            }
            <br />
            <code>{JSON.stringify(user)}</code>
            <br />
            {
                user && <button onClick={handleLogout}>Logout</button>
            }
        </div>
    )
}

export default Profile