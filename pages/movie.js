export default function Movie({ movie }) {
  return (
    <div className='movie-container'>
      <div>
        <img
          className='movie-poster'
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      </div>
      <div>
        <h3><b>{movie.title}</b></h3>
        <p>{movie.overview}</p>
        <p><b>Release Date: </b>{movie.release_date}</p>
      </div>
    </div>
  );
}
