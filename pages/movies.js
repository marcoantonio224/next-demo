import Link from 'next/link';
import Movie from './movie.js';
import axios from 'axios';

export default function Movies({movies}) {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie, id) =>
          <Movie movie={movie} key={id} />
        )}
      </ul>
    </>
  )
}

// This function gets called at build time, returns it to the component
// (Only support absolute urls)
export async function getStaticProps() {
  // Call an external API endpoint to get movies
  const res = await axios.get("http://localhost:3000/api/movies");
  const movies = res.data.movies;
  // will receive `movies` as a prop at build time
  return {
    props: {
      movies: movies
    }
  }
}