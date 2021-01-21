import {HomePage,  Search} from './pages/index';
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
            <HomePage onClick = {changeTheme} isDark = {isDarkTheme} />
          </Route>
          <Route path="/search">
              <Search />
          </Route>
        </Switch>
    </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
