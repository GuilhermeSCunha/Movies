import styled from 'styled-components';


export const HeaderContainer = styled.header`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 16px;

    width: 100vw;
    height: 90px;
    background-color: ${({theme}) => theme.colors.tertiaryColor};
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.062);

    @media (max-width: 767px) {

            flex-direction: column;
            justify-content: space-around;
            height: 100px;

    }

    @media (max-width: 601px) {
            padding-left: 8px;
    }

`;

export const LogoSite = styled.img`

        max-width: 200px;
        max-height: auto;

        @media (max-width: 1019px) {
            max-width: 100px;
        }

        @media (max-width: 767px) {
            display: none;
        }
`;

export const ThemeChanger = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 16px;
    @media (max-width: 601px) {
        margin-right: 8px;
    }

    span { 

        font-size: 15px;
        font-family: sans-serif;
        margin-right: 8px;
        color: ${ ({theme}) => theme.colors.secondaryColor}

    }
`;