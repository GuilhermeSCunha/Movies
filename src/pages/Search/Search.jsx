import { Container, Teste } from "./style";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/index";
import { GetApiData } from "../../services/apiData.service";
import { useEffect, useState } from "react";


function Search(porps) {

    const { isDark, headerClick, setSearchValue } = porps;

    const history = useHistory();
    const url = window.location.href.toString();
    const movieName = url.replace("http://localhost:3000/search/", "");
    


    const [MoviesData , SetMoviesData] = useState ("");
    const [searchContent , setSearchContent] = useState(movieName);

    function changePage() {

        const searchContentReady =  searchContent.replace(/ /g, "+");

        history.push(`/search/${searchContentReady}`);
        GetMoviesInfoFromApi ()

        
    }
    
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
        console.log("url ::",movieName);
    },[])

    return (

        <Container>

              <Header

                isDark = { isDark } 
                onSwitchClick = {headerClick}
                onSearchClick = {changePage}
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