 export async function GetApiData(MovieName) {
    try{

        const Response = await fetch(`http://www.omdbapi.com/${process.env.REACT_APP_API_KEY}&t=${MovieName}&plot=full`);
        const data = await Response.json();

        console.log("RESPONSE ::", data);

        return data;

    } catch (error) {

        console.error("ERROR :: ", error);

    }

    
}