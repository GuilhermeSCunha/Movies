import { Header } from "../../components/index";
import { Container,  ContenteContainer } from "./style";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function NoMatch (props) {

    const { isDark, headerClick } = props;
    const history = useHistory();
    
    const [searchContent , setSearchContent] = useState("");

    function changePage() {

        const searchContentReady =  searchContent.replace(/ /g, "+");

        history.push(`/search/${searchContentReady}`);
        
    }

    return (
        <Container>
            <Header 
                isDark = { isDark }
                onSwitchClick = {headerClick} 
                onSearchClick = {changePage}
                onChange = {(event) => setSearchContent(event.target.value) } 
                SearchInputValue = {searchContent}
            />
            < ContenteContainer>
                <h2>404 page not found!</h2>
                <h3>This url don't match any.</h3>
            </ ContenteContainer>
        </Container>

    );

}

export default NoMatch;