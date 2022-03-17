import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

function User() {
    const [loading, setLoading] = useState(true);
    const [user, setUsers] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUsers(res.data))
            .finally(() => setLoading(false))
    }, [user])

    return (
        <div>
            {loading && <div>Loading...</div>}
            {!loading &&
                <>

                    <h1>User Detail</h1>
                    <code>{JSON.stringify(user)}</code>
                    <br />
                    <br />
                    <Link to={`/users/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
                </>
            }
        </div>
    )
}

export default User