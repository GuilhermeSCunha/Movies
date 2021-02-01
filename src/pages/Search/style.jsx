import styled from 'styled-components';


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 768px) {
        justify-content: center;
    }

    width: 100vw;
    min-height: 100vh;
    background-color: ${({theme}) => theme.colors.background};


`;

export const ContentContainer = styled.main`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

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

    @media (max-width: 768px) {
       margin-bottom: 8px;
    }

`;

export const Infos = styled.div`

    padding-left: 8px;
    background-color: transparent;

    h2{

        color: ${ ({theme}) => theme.colors.secondaryColor};
        margin-left: 16px;

        @media (max-width: 768px) {
            text-align: center;
    }


    }

    h3{

        color: ${ ({theme}) => theme.colors.secondaryColor};
        margin-left: 16px;

        @media (max-width: 768px) {
                text-align: center;
        }

    }

    p{
        color: ${ ({theme}) => theme.colors.secondaryColor};
        margin: 8px 0  8px 16px;
        max-width: 940px;
        font-family: sans-serif;

    }

    div {
        display: flex;
        flex-direction: row;    
        span{
            color: ${ ({theme}) => theme.colors.secondaryColor};
            margin: 8px 0  0 3px;
            font-size: 16px;
            max-width: 940px;

        }

    }

`; 
