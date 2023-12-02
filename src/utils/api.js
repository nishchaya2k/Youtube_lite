import axios from "axios";
const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
    
    params: {hl: 'en',gl: 'US'}, 
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}
/* Axios is a popular third-party library used to make HTTP requests in React
 applications. It provides a simple, promise-based interface that makes it easy to
 fetch data from an API or server. Axios also supports a variety of features, such
 as request cancellation, response caching, and progress tracking.*/
