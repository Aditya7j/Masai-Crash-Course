import axios from "axios";
import { useEffect, useState } from "react";
import LatestMovie from "../Category/latest-movie";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Carousel from "../crousel";


const HomePage = () => {
    const API_KEY = "1352f98d";
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [loader, setLoader] = useState(false);
    const gifLoader = "https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700";
    const [noData, setNoData] = useState(false);
    const noDataGif = "https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg";
    const navigate = useNavigate()

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (search.trim() !== '') {
                fetchMovie();
            } else {
                setMovies([]);
            }
        }, 500);
        return () => clearTimeout(debounce);
    }, [search]);

    const fetchMovie = () => {
        setLoader(true);
        axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(search)}`).then((res) => {
            setLoader(false);
            if (res.data.Response === 'False' && res.data.Error === 'Movie not found!') {
                setNoData(true);
            } else {
                setNoData(false);
                setMovies(res.data.Search);
            }
        }).catch((error) => {
            setLoader(false);
            console.log(error.message);
        });
    }

    const redirectMovie = (imdbID) => {
        navigate(`/movie/${imdbID}`)
    }



    return (
        <div className="container">
            <h1 className="search-movies-text">Search movies</h1>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder="Enter Movie Name"
                />
            </div>

            {search.trim() === '' && <Carousel />}

            {noData ? <div className="img-data-container">
                <h2>NO MOVIE FOUND</h2>
            </div> :
                <div>
                    {loader ? <div className="img-data-container">
                        <img src={gifLoader} alt="Loading..." className="img-no-data" />
                    </div> :
                        <div>
                            {movies !== null ? <LatestMovie movies={movies} redirectMovie={redirectMovie} /> : null}
                        </div>}
                </div>}
        </div>
    );
}

export default HomePage;
