import { Container, Teste } from "./style";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/index";
import { GetApiData } from "../../services/apiData.service";
import { useEffect, useState } from "react";

function Search(porps) {

    const { isDark, headerClick, firstSearch, setSearchValue } = porps;
    const history = useHistory();

    const [MoviesData , SetMoviesData] = useState ("");
    const [searchContent , setSearchContent] = useState(firstSearch);
    
    async function GetMoviesInfoFromApi () {

        try {

            const api = await GetApiData(searchContent);
            SetMoviesData (api);
            setSearchContent(""); 

        } catch (E) {
            console.error("error :: ", E);
        }
    }
    
    useEffect(() => {
        GetMoviesInfoFromApi();
        setSearchValue("");
    },[])

    return (

        <Container>

              <Header

                isDark = { isDark } 
                onSwitchClick = {headerClick}
                onSearchClick = {GetMoviesInfoFromApi}
                onChange = {(event) => setSearchContent(event.target.value) } 
                SearchInputValue = {searchContent}

              />

              <Teste>Search</Teste>
              <button onClick = {() => history.push("/")} >go back</button>
              <img src= {MoviesData.Poster} alt=""/>´
              <span>{MoviesData.Error}</span>
        </Container>

    );
    
}

export default Search;