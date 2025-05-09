import { fetchData } from '../../../../utils/fetchData'

export default async function handler(req, res) {
  const { id } = req.query;
  const { movies } = await fetchData();

  const list = movies.filter(m => m.genreId === id);
  if (list.length === 0)
    return res.status(404).json({ message: 'No movies for that genre' });

  res.status(200).json(list);
}
