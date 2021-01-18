import {useState} from 'react';
import {Header} from './components/index';
import { GlobalStyle} from './styles/index';
import { ThemeProvider } from 'styled-components';
import {Dark, Light} from './styles/index';

function App() {

  const [ isDarkTheme, setIsDarkTheme] = useState(false);

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
