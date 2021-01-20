import {Header} from './components/index';
import { GlobalStyle} from './styles/index';
import { ThemeProvider } from 'styled-components';
import {Dark, Light} from './styles/index';
import usePersistedState from './utils/usePersistedState/usePersistedState';

function App() {

  const [ isDarkTheme, setIsDarkTheme] = usePersistedState( "colorTheme", false);

  function changeTheme () {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div className="App">
      <ThemeProvider theme = {isDarkTheme ? Dark : Light}>
          <GlobalStyle />
          <Header onClick = {changeTheme} isDark = {isDarkTheme} />
        </ThemeProvider>
    </div>
  );
}

export default App;
