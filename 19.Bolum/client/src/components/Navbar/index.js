import styles from './styles.module.css';
import React from 'react';
import { Button } from '@chakra-ui/react';

import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";

function Navbar() {
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
                <Link to="/signin">
                    <Button colorScheme='pink'>Login</Button>
                </Link>
                <Link to="/signup">
                    <Button colorScheme='pink'><Button colorScheme='pink'>Register</Button></Button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar