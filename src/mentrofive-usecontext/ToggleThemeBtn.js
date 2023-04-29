import React from 'react'
import { AppContext } from "./context";

function ToggleThemeButton() {
    const {toggleThemeMain} = React.useContext(AppContext);

    return<button onClick={toggleThemeMain}>Сменить тему</button>
}

export default ToggleThemeButton;
