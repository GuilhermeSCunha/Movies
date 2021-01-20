import React, { useState } from 'react';
import Logo from '../../assets/images/movies_logo.png';
import { Container, ThemeChanger} from './style';
import { Switch, InputSearch } from '../index';

function Header (props) {

    const { onClick, isDark } = props;

    const theme = isDark ? "off" : "on";

    const [searchValue, setSearchValue] = useState ("");

    function Search () {

        console.log("pesquisou por :: ", searchValue);
        setSearchValue("");

    }

    return (
    <Container>

        <img src= {Logo} alt="Movies logo"/>

        <InputSearch 

            onClick = {Search}
            isDark = { isDark } 
            onChange = {(event) => setSearchValue(event.target.value)} 
            value = {searchValue}

        />

        <ThemeChanger>

            <span> set dark theme {theme}</span>

            <Switch onClick = {onClick} isChecked = {isDark} />

        </ThemeChanger>

     </Container>

    );
};

export default Header;