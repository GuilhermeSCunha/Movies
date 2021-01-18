import React from 'react';
import Logo from '../../assets/images/movies_logo.png';
import { Container, ThemeChanger} from './style';
import Switch from '../switch/Switch';

function Header (props) {

    const { onClick, isDark } = props;

    const theme = isDark ? "light" : "dark";

    return (
    <Container>

        <img src= {Logo} alt="Movies logo"/>
        <ThemeChanger>

            <span> Change the color theme to {theme}</span>

            <Switch onClick = {onClick} isDark = {isDark} />

        </ThemeChanger>

     </Container>

    );
};

export default Header;