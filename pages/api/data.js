// pages/api/data.js
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'movies.json');
  const data = await fs.readFile(filePath, 'utf8');
  const json = JSON.parse(data);
  res.status(200).json(json);
}
