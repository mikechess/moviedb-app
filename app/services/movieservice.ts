import axios from "axios";

const API_KEY= "e46bbbed5a14602bf1d6cba23b5305dd"
const API_BASE_URL= "http://api.themoviedb.org/3"

const client = axios.create({
    baseURL: API_BASE_URL,
    params: {api_key: API_KEY}
})

export const searchMovies = async (query: string) => {
    try{
        const response = await client.get("/search/movie", {
            params: {query,},
        });

        if(response.data && response.data.results) {
            return response.data.results;
        } else {
            console.error("Could'nt get the data");
        }
    } catch(error) {
        console.error(error);
        return [];
    }
}