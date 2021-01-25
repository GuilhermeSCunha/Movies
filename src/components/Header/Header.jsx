import { Switch, InputSearch } from '../../components/index';
import { HeaderContainer, ThemeChanger, LogoSite } from "./style";
import Logo from '../../assets/images/movies_logo.png';

function Header(props) {

    const { isDark, onSwitchClick, onSearchClick, onChange, SearchInputValue } = props;

    const theme = isDark ? "off" : "on";

    return (

        <HeaderContainer>
             <LogoSite src= {Logo} alt="Movies logo"/>

            <InputSearch 
            isHeader 
            isDark = { isDark } 
            onChange = { onChange } 
            onClick = { onSearchClick } 
            value = { SearchInputValue }
            />

            <ThemeChanger>

                <span> set dark theme {theme}</span>
                <Switch  onClick = {onSwitchClick} isChecked = {isDark} />

            </ThemeChanger>
            
        </HeaderContainer>


    );
    
}

export default Header;