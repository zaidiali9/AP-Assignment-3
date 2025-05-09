import { fetchData } from '../../../utils/fetchData';

export default async function handler(req, res) {
  const { directors } = await fetchData();
  res.status(200).json(directors);
}
