import { SearchContainer } from './style';
import { IconButton } from "../index";

function InputSearch (props) {
    
    const { isDark, onChange, onClick, value } = props;

    const isDarkMode = isDark ? "searchIconWhite" : "searchIconBlack";

    return (
        
        <SearchContainer>

            <input value = {value} onChange = {onChange} type="search" name="search" id="search" placeholder = "write the name of the movie"/>

            <IconButton onClick = {onClick} iconName = { isDarkMode } alt = "search icon"/>
            
        </SearchContainer>

    );
}

export default InputSearch;