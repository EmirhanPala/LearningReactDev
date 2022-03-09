import Button from './Button';
import Header from './Header';

import { useTheme } from '../context/ThemeContext'
import Profile from './Profile';

function Container() {
    const { theme } = useTheme();
    //console.log(theme);
    return (
        <div className={`app ${theme == "dark" ? theme : ""}`}>
            <Header />
            <hr />
            <Button />
            <hr />
            <Profile />
        </div>
    )
}

export default Container