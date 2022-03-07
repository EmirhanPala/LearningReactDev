import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import User from "./User"; 

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const { path, url } = useRouteMatch();

  console.log(path, url);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {loading && <div>Loading...</div>}
      <h1>Users</h1>
      <ul>
        {
          users.map((user) =>
            <li key={user.id}>
              <Link to={`${url}/${user.id}`}>{user.name}</Link>
            </li>
          )
        }
      </ul>

      {
        /*
        Nesting(İç içe routing) İşlemlerini Nasıl Yapabiliriz?
        Örnek Link: https://v5.reactrouter.com/web/example/nesting
        Burdaki yapılan örnekte liste kaybedilmeden direkt olarak alt tarafta görüntüleme işlemini yapmışlar.
        Bizde bunun aynısı user üzerinde yapmaya çalışıcaz.

        Burada önemli olan şeyler baktığımız sitedeki 
        Topics'in orada içeriğine baktığımızda
        useRouteMatch hook'unu kullanmış.
        Yine bu componentin içinde bir switch daha var.
        Bu switch'in içindede yine linkler var.
        O zaman bizimde yapmamız gereken şey Users componentimizde yeni bir switch yapısı
        kurmamız gerekiyor.

        Switch içerisinde path tanımları var bunlar nereden geliyor?
        useRouteMatch()'den geliyor.

        */
      }

      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User} />
      </Switch>

    </div>
  )
}

export default Users