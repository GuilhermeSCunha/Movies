import { SearchContainer } from './style';
import searchIconBlack from '../../assets/icons/searchIconBlack.png';
import searchIconWhite from '../../assets/icons/searchIconWhite.png';

function InputSearch (props) {
    
    const { isDark, onChange, onClick, value } = props;

    const isDarkMode = isDark ? searchIconWhite : searchIconBlack;

    return (
        
        <SearchContainer>

            <input value = {value} onChange = {onChange} type="search" name="search" id="search" placeholder = "write the name of the movie"/>

            {//todo: fazer desse botão um componente
            }

            <button onClick = {onClick} >
                <img src= { isDarkMode } alt= "serch icon"/> 
            </button> 
            
        </SearchContainer>

    );
}

export default InputSearch;