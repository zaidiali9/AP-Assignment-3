import { fetchData } from '../../../../utils/fetchData';

export default async function handler(req, res) {
  const { id } = req.query;
  const { movies } = await fetchData();
  const movie = movies.find(m => m.id === id);

  if (!movie) return res.status(404).json({ message: 'Movie not found' });
  res.status(200).json(movie);
}
