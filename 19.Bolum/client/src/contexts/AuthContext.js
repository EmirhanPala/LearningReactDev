import {useState, createContext, useEffect, useContext} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLogIn] = useState(false);

    const login = (data) => {
        setLogIn(true);
        setUser(data.user);
    };

    const values = {
        loggedIn,
        user,
        login,
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export {
    AuthProvider,
    useAuth
};