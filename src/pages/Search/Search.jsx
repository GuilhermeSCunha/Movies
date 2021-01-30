import { Container, ContentContainer, FirstInfos, ImageContainer } from "./style";
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
            
            <div>
            {!MoviesData.Error &&
                <ContentContainer>
                    <ImageContainer>
                        {MoviesData.Poster === "N/A" ? <span>No Image</span> : <img src= {MoviesData.Poster} alt="poster"/>}
                    </ImageContainer>

                    <FirstInfos>
                    <h2>{MoviesData.Title}</h2>
                    <p>Released: {MoviesData.Released}</p>
                    <p>Genre: {MoviesData.Genre}</p>
                    <p>{MoviesData.Runtime}</p>
                    <p>{MoviesData.Actors}</p>
                    <p>{MoviesData.Awards}</p>
                    <p>{MoviesData.Country}</p>
                    <p>{MoviesData.Director}</p>
                    <p>{MoviesData.Language}</p>
                    <p>{MoviesData.Metascore}</p>
                    <p>{MoviesData.Plot}</p>
                    <p>{MoviesData.Rated}</p>
                    <p>{MoviesData.Type}</p>
                    <p>{MoviesData.Writer}</p>
                    <p>{MoviesData.Year}</p>
                    {MoviesData.totalSeasons && <p>{MoviesData.totalSeasons}</p>}
                    <p style = {{color: "red"}}>{MoviesData['Ratings'] && MoviesData['Ratings'][0] && MoviesData['Ratings'][0]['Source']}</p>
                    <p style = {{color: "red"}}>{MoviesData['Ratings'] && MoviesData['Ratings'][0] && MoviesData['Ratings'][0]['Value']}</p>
                    <p style = {{color: "red"}}>{MoviesData['Ratings'] && MoviesData['Ratings'][1] && MoviesData['Ratings'][1]['Source']}</p>
                    <p style = {{color: "red"}}>{MoviesData['Ratings'] && MoviesData['Ratings'][1] && MoviesData['Ratings'][1]['Value']}</p>
                    <p style = {{color: "red"}}>{MoviesData['Ratings'] && MoviesData['Ratings'][2] && MoviesData['Ratings'][2]['Source']}</p>
                    <p style = {{color: "red"}}>{MoviesData['Ratings'] && MoviesData['Ratings'][2] && MoviesData['Ratings'][2]['Value']}</p>
                    <p>{MoviesData.Websit}</p>
                    <p>{MoviesData.Production}</p>
                   
                    
                </FirstInfos>
                </ContentContainer>
            }
                
                <span>{MoviesData.Error}</span>

            </div>
            

        </Container>

    );
    
}

export default Search;