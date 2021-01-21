import { Container, Teste } from "./style";
import { useHistory } from "react-router-dom";

function Search() {

    const history = useHistory();

    return (

        <Container>
              <Teste>Search</Teste>
              <button onClick = {() => history.push("/")} >go back</button>
        </Container>

    );
    
}

export default Search;