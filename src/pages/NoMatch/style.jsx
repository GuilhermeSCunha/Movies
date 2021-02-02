import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.background};

`;

export const ContenteContainer = styled.div`

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    padding-top: 16px;

    h2 {

        color: ${({theme}) => theme.colors.secondaryColor};

    }

    h3 {

        color: ${({theme}) => theme.colors.secondaryColor};

    }


`;