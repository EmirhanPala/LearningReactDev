import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import ProtectedRoute from './pages/ProtectedRoute';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Profile from './pages/Profile';
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div className='content'>
          <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:product_id" component={ProductDetail} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/basket" component={Basket} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/admin" component={Admin} admin={true} />
          <Route path='*' component={Error404} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
