import { Container, ContentContainer, Infos, ImageContainer } from "./style";
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
    const [IsLoading , setIsLoading] = useState(true);
  

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
            setIsLoading(false); 

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
            {IsLoading ? <span>LOADING...</span> : 
            
                    
                    <div>
                    {!MoviesData.Error &&
                        <div>
                            <ContentContainer>
                                <ImageContainer>
                                    {MoviesData.Poster === "N/A" ? <span>No Image</span> : <img src= {MoviesData.Poster} alt="poster"/>}
                                </ImageContainer>

                                <Infos>
                                <h2>{MoviesData.Title}</h2>
                                <p>Released: {MoviesData.Released}</p>
                                <p>Genre: {MoviesData.Genre}</p>
                                <p>Duration: {MoviesData.Runtime}</p>
                                <p>Actors: {MoviesData.Actors}</p>
                                <p>Awards: {MoviesData.Awards}</p>
                                <p>Country: {MoviesData.Country}</p>
                                <p>Director: {MoviesData.Director}</p>
                                <p>Language: {MoviesData.Language}</p>
                                
                                
                
                                <p>Type(movie/series): {MoviesData.Type}</p>
                                
                                <p>Year: {MoviesData.Year}</p>
                                {MoviesData.totalSeasons && <p>Number of seasons: {MoviesData.totalSeasons}</p>}
                                
                                {MoviesData.Websit && <p>Websit: {MoviesData.Websit}</p>}
                                <p>Production: {MoviesData.Production}</p>
                            
                                
                            </Infos>

                            <Infos>
                        
                                    <h3>Ratings:</h3>
                                    <p>Metascore: {MoviesData.Metascore}</p>
                                    <div>
                                        {MoviesData['Ratings'] && MoviesData['Ratings'][0] && <p>{MoviesData['Ratings'][0]['Source']}:</p>}
                                        <span>{MoviesData['Ratings'] && MoviesData['Ratings'][0] && MoviesData['Ratings'][0]['Value']}</span>
                                    </div>
                                    <div>
                                        {MoviesData['Ratings'] && MoviesData['Ratings'][1] && <p>{MoviesData['Ratings'][1]['Source']}:</p>}
                                        <span>{MoviesData['Ratings'] && MoviesData['Ratings'][1] && MoviesData['Ratings'][1]['Value']}</span>
                                    </div>
                                    <div>
                                        {MoviesData['Ratings'] && MoviesData['Ratings'][2] && <p>{MoviesData['Ratings'][2]['Source']}:</p>}
                                        <span>{MoviesData['Ratings'] && MoviesData['Ratings'][2] && MoviesData['Ratings'][2]['Value']}</span>
                                    </div>
                                    
                            </Infos>
                            </ContentContainer>

                            <ContentContainer>
                                <Infos>
                                    <h2>Movie summary:</h2>
                                    <p>{MoviesData.Plot}</p>
                                    <h2>Writer(s):</h2>
                                    <p>{MoviesData.Writer}</p>
                                </Infos>
                            </ContentContainer>

                        </div>

                    }
                        
                        <span>{MoviesData.Error}</span>

                    </div>
            
            }
         </Container>

    );
    
}

export default Search;