import { Container, Teste } from "./style";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/index";

function Search(porps) {

    const { isDark, headerClick } = porps;
    const history = useHistory();

    return (

        <Container>
              <Header isDark = { isDark } onClick = {headerClick} />
              <Teste>Search</Teste>
              <button onClick = {() => history.push("/")} >go back</button>
        </Container>

    );
    
}

export default Search;