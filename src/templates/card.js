function renderMovies(movies) {
  const markUp = movies
    .map(
      movie => `
    <li class="movie-item">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" >
          <h2>${movie.title}</h2>
          <p>Original language: ${movie.original_language}</p>
          <p>Release date: ${movie.release_date}</p>
          <p>Origin country: ${movie.origin_country}</p>
          <p>Rating: ${movie.vote_average}</p>
        </li>
    `
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markUp);
}
