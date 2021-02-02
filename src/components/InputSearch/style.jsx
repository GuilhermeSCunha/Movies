import styled from 'styled-components';

export const SearchContainer = styled.form`

    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 582px;
    height: 44px;

    &:hover {
        box-shadow: 0px 0px 10px 3px rgba(39, 39, 39, 0.2);
    }



    @media (max-width: 895px) {

        max-width: ${(props) => props.Header ? "500px" : "583px"};

    }

    @media (max-width: 803px) {

        max-width: ${(props) => props.Header ? "400px" : "583px"};

    }
    @media (max-width: 590px) {

        max-width: ${(props) => props.Header ? "400px" : "320px"};

    }

    @media (max-width: 414px) {

        max-width: ${(props) => props.Header ? "300px" : "320px"};

    }


    border: 1px solid ${({theme}) => theme.colors.secondaryColor};
    border-radius: 18px;
    padding-right: 10px;
   

    input {
        
        background-color: transparent;
        border: none;
        outline: none;

        width: 582px;
        min-width: 200px;
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
`;