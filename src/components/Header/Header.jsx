import { Switch, InputSearch } from '../../components/index';
import { HeaderContainer, ThemeChanger, LogoSite } from "./style";
import Logo from '../../assets/images/movies_logo.png';

function Header(props) {

    const { isDark, onClick } = props;

    const theme = isDark ? "off" : "on";

    return (

        <HeaderContainer>
             <LogoSite src= {Logo} alt="Movies logo"/>
            <InputSearch isHeader isDark = { isDark }/>
            <ThemeChanger>

                <span> set dark theme {theme}</span>
                <Switch  onClick = {onClick} isChecked = {isDark} />

            </ThemeChanger>
            
        </HeaderContainer>


    );
    
}

export default Header;