import styles from './styles.module.css';
import React from 'react';
import { Button } from '@chakra-ui/react';

import { useAuth } from '../../contexts/AuthContext';
import { useBasket } from '../../contexts/BasketContext';

import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";

function Navbar() {
    const { loggedIn } = useAuth();
    const { items } = useBasket();
    console.log(loggedIn);
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/">eCommerce</Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.right}>
                {
                    !loggedIn && (
                        <>
                            <Link to="/signin">
                                <Button colorScheme='pink'>Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button colorScheme='pink'><Button colorScheme='pink'>Register</Button></Button>
                            </Link>
                        </>
                    )
                }

                {
                    loggedIn && <>
                    {
                        items.length > 0 && (
                            <Link to="/basket">
                                <Button colorScheme="pink" variant="outline">
                                    Basket ({items.length})
                                </Button>
                            </Link>
                        )
                    }
                        <Link to="/profile">
                            <Button>Profile</Button>
                        </Link>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar