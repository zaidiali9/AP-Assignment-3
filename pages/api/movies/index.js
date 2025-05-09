import { fetchData } from '../../../utils/fetchData';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  const { movies } = await fetchData();
  res.status(200).json(movies);
}
