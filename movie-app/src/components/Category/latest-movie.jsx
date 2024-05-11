import "./latest.css";

const LatestMovie = ({movies,redirectMovie}) =>{
    return(
        <div className="movies-container">
        {movies?.map(movie => (
          <div key={movie.imdbID} className="movie" onClick={()=>redirectMovie(movie.imdbID)}>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            <h2>{movie.Title}</h2>
            <p>Type: {movie.Type}</p>
            <p>Year: {movie.Year}</p>
          </div>
        ))}
      </div>
    )
}
export default LatestMovie;