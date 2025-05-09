import { fetchData } from '../../../utils/fetchData';

export default async function handler(req, res) {
  const { genres } = await fetchData();
  res.status(200).json(genres);
}
