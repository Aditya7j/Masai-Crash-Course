import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./singlemovie.css";

const SingleMovie = () => {
    const API_KEY = "1352f98d";
    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [loader, setLoader] = useState(false);
    const gifLoader = "https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700";

    useEffect(() => {
        setLoader(true)
        const fetchSingleMovie = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
                setLoader(false);
                setMovieData(response.data);
            } catch (error) {
                setLoader(false);
                console.error("Error fetching single movie:", error);
            }
        };

        fetchSingleMovie();
    }, [id, API_KEY]);

    return (
      
        <div className="single-movie-container">
            {loader ? (
                <div className="img-data-container">
                    <img src={gifLoader} alt="Loading..."  className="img-no-data" />
                </div>
            ) : movieData && (
                <>
                    <div className="poster-container">
                        <img src={movieData.Poster} alt={movieData.Title} className="movie-poster" />
                    </div>
                    <div className="details-container">
                        <h2 className="title">{movieData.Title} ({movieData.Year})</h2>
                        <p><strong>Rated:</strong> {movieData.Rated}</p>
                        <p><strong>Released:</strong> {movieData.Released}</p>
                        <p><strong>Runtime:</strong> {movieData.Runtime}</p>
                        <p><strong>Genre:</strong> {movieData.Genre}</p>
                        <p><strong>Director:</strong> {movieData.Director}</p>
                        <p><strong>Writer:</strong> {movieData.Writer}</p>
                        <p><strong>Actors:</strong> {movieData.Actors}</p>
                        <p><strong>Plot:</strong> {movieData.Plot}</p>
                        <p><strong>Language:</strong> {movieData.Language}</p>
                        <p><strong>Country:</strong> {movieData.Country}</p>
                        <p><strong>Awards:</strong> {movieData.Awards}</p>
                        <p id="rating"><strong>IMDB Rating:</strong> {movieData.imdbRating}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default SingleMovie;
