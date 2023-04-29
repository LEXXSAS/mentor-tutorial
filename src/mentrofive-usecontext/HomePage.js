import React from 'react'
import ToggleThemeButton from "./ToggleThemeBtn";
import { AppContext } from "./context";

function HomePage() {
    const {theme, themeText} = React.useContext(AppContext);
    return (
        <>
            <p className={themeText}>Выбрана тема: <b>{theme === 'darkMain' ? 'тёмная' : 'светлая'}</b></p>
            <ToggleThemeButton />
        </>
    );
}

export default HomePage;
