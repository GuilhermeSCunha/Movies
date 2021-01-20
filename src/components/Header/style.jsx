import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.background};
    font-size: 50px;
    img {
        max-width: 372px;
        max-height: auto;
        margin-bottom: 16px;

        @media(max-width: 375px) {
            width: 272px;
        }
    }
`;

export const ThemeChanger = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 24px;

    span { 

        font-size: 15px;
        font-family: sans-serif;
        margin-right: 10px;
        color: ${ ({theme}) => theme.colors.secondaryColor}

    }
`;
