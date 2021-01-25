import Logo from '../../assets/images/movies_logo.png';
import { Container, ThemeChanger} from './style';
import { Switch, InputSearch } from '../../components/index';
import { useHistory } from "react-router-dom";

function HomePage (props) {

    const { onClick, isDark, searchValue, onChange} = props;

    const theme = isDark ? "off" : "on";

    

    const history = useHistory();

    function Search () {
        
        history.push("/search");

    }

    return (
    <Container>

        <img src= {Logo} alt="Movies logo"/>

        <InputSearch 

            onClick = {Search}
            isDark = { isDark } 
            onChange = {onChange} 
            value = {searchValue}

        />

        <ThemeChanger>

            <span> set dark theme {theme}</span>

            <Switch onClick = {onClick} isChecked = {isDark} />

        </ThemeChanger>

     </Container>

    );
};

export default HomePage;