const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const movieDetails = document.getElementById('movieDetails');

let typingTimer;
const doneTypingInterval = 500;

function fetchMovies(searchTerm) {
  fetch(`http://www.omdbapi.com/?apikey=<Your API Key>&s=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      displayMovies(data.Search);
    })
    .catch(error => console.error('Error fetching movies:', error));
}

function displayMovies(movies) {
  searchResults.innerHTML = '';
  if (movies) {
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title} poster">
        <div>
          <h2>${movie.Title}</h2>
          <p>${movie.Year}</p>
        </div>
      `;
      movieElement.addEventListener('click', () => showMovieDetails(movie.imdbID));
      searchResults.appendChild(movieElement);
    });
  } else {
    searchResults.innerHTML = '<p>No movies found.</p>';
  }
}

function showMovieDetails(imdbID) {
  fetch(`http://www.omdbapi.com/?apikey=<Your API Key>&i=${imdbID}`)
    .then(response => response.json())
    .then(data => {
      movieDetails.innerHTML = `
        <h2>${data.Title}</h2>
        <img src="${data.Poster}" alt="${data.Title} poster">
        <p>Year: ${data.Year}</p>
        <p>IMDb Rating: ${data.imdbRating}</p>
        <p>Cast: ${data.Actors}</p>
      `;
      movieDetails.style.display = 'block';
    })
    .catch(error => console.error('Error fetching movie details:', error));
}

searchInput.addEventListener('input', () => {
  clearTimeout(typingTimer);
  if (searchInput.value) {
    typingTimer = setTimeout(() => {
      fetchMovies(searchInput.value);
    }, doneTypingInterval);
  } else {
    searchResults.innerHTML = '';
  }
});

document.addEventListener('click', (event) => {
  if (!searchResults.contains(event.target) && !movieDetails.contains(event.target)) {
    movieDetails.style.display = 'none';
  }
});
