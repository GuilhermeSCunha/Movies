import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #232323;
    color: #ffffff;
    font-size: 50px;
    img {
        max-width: 372px;
        max-height: auto;

        @media(max-width: 375px) {
            width: 272px;
        }
    }
`;
