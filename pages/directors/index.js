import useSWR from "swr";
import { Box, Typography } from "@mui/material";
import MovieCard from "../../components/MovieCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Directors() {
  const { data, error } = useSWR("/api/data", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading…</div>;

  return (
    <Box sx={{ p: 5 }}>
      {data.directors.map((d) => (
        <Box key={d.id} sx={{ mb: 4 }}>
          <Typography variant="h5">{d.name}</Typography>
          <Typography sx={{ mb: 2 }}>{d.biography}</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {data.movies
              .filter((m) => m.directorId === d.id)
              .map((m) => (
                <MovieCard key={m.id} movie={m} />
              ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
