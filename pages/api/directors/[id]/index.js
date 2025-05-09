import { fetchData } from '../../../../utils/fetchData';

export default async function handler(req, res) {
  const { id } = req.query;
  const { directors, movies } = await fetchData();

  const director = directors.find(d => d.id === id);
  if (!director) return res.status(404).json({ message: 'Director not found' });

  const films = movies.filter(m => m.directorId === id);
  res.status(200).json({ ...director, movies: films });
}
