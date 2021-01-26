import React, { useState } from 'react';
import {HomePage,  Search, NoMatch} from './pages/index';
import { GlobalStyle} from './styles/index';
import { ThemeProvider } from 'styled-components';
import {Dark, Light} from './styles/index';
import usePersistedState from './utils/usePersistedState/usePersistedState';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [ isDarkTheme, setIsDarkTheme] = usePersistedState( "colorTheme", false);

  const [searchValue, setSearchValue] = useState ("");

  function changeTheme () {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div className="App">
      <ThemeProvider theme = {isDarkTheme ? Dark : Light}>
          <GlobalStyle />
        <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage 

              onClick = {changeTheme} 
              isDark = {isDarkTheme} 
              onChange = {(event) => setSearchValue(event.target.value)}
              searchValue = {searchValue}

            />
          </Route>
          <Route path="/search/:movieName">
              <Search 
                isDark = {isDarkTheme} 
                headerClick = {changeTheme} 
                setSearchValue = {setSearchValue}
              />
          </Route>
          <Route>
              <NoMatch />
          </Route>
        </Switch>
    </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
