import React from 'react';
import Logo from '../../assets/images/movies_logo.png';
import { Container} from './style';

function Header () {
    return (
    <Container>
        <img src= {Logo} alt="Movies logo"/>
     </Container>

    );
};

export default Header;