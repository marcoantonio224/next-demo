import axios from 'axios';

export default async (req, res) => {
  console.log("HITTING MOVIE API")
  const key = process.env.MOVIE_API_KEY
  let type = 'popular';
  let url = `https://api.themoviedb.org/3/movie/${type}?api_key=${key}&language=en-US&page=1`;
  try {
    const moviesResponse = await axios({ method: 'GET', url: url });
    res.status(200).json({ success: true, movies: moviesResponse.data.results });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: 'Failed getting movies.' })
  }
}
