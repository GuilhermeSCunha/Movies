import styled from 'styled-components';

export const SearchContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 582px;
    height: 44px;
    border: 1px solid ${({theme}) => theme.colors.secondaryColor};
    border-radius: 18px;
    padding-right: 10px;
   

    input {
        
        background-color: transparent;
        border: none;
        outline: none;

        width: 582px;
        min-width: 250px;
        height: 44px;
        padding-left: 10px; 
        color: ${({theme}) => theme.colors.secondaryColor};

        ::-webkit-search-decoration,
        ::-webkit-search-cancel-button,
        ::-webkit-search-results-button,
        ::-webkit-search-results-decoration {
            display: none;
        }

    }


    button {

        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        img {
        max-height: 30px;
        max-width: 40px;
        margin-bottom: 0;
    }
        
    }

`;