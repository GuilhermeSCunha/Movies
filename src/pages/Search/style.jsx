import styled from 'styled-components';


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100vw;
    min-height: 100vh;
    background-color: ${({theme}) => theme.colors.background};


`;

export const ContentContainer = styled.main`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    padding-top: 16px;
    width: 100%;

    span {

        color: ${ ({theme}) => theme.colors.secondaryColor};
        font-size: 30px;
        font-family: sans-serif;

    }

`;

export const ImageContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;


    background-color: ${({theme}) => theme.colors.tertiaryColor};
    width: 300px;
    height: 445px;

`;

export const FirstInfos = styled.div`

    padding-left: 8px;
    background-color: transparent;

    h2{

        color: ${ ({theme}) => theme.colors.secondaryColor};
        margin-left: 16px;

    }

    p{
        color: ${ ({theme}) => theme.colors.secondaryColor};
        margin-left: 16px;

    }

`; 
