import React from 'react'
import './style.css'
import HomePage from './HomePage';
import { AppContext } from './context';

function App() {
    const [theme, setTheme] = React.useState('');
    const [themeText, setThemeText] = React.useState('');

    const toggleThemeMain = () => {
        setTheme(theme === 'darkMain' ? '' : 'darkMain');
        setThemeText(themeText === 'dark' ? '' : 'dark');
    }

  return (
    <div className={`App ${theme}`}>
        <main>
        <h1 className={themeText}>React Context</h1>
        <AppContext.Provider value={{toggleThemeMain, theme, themeText}}>
            <HomePage />
        </AppContext.Provider>
        </main>
    </div>
  );
}

export default App;
