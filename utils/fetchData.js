import path from "path";
import { promises as fs } from "fs";

export async function fetchData() {
  const filePath = path.join(process.cwd(), "data", "movies.json");
  const file = await fs.readFile(filePath, "utf8");
  return JSON.parse(file);
}
 