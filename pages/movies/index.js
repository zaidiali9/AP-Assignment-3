import { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";
import { fetchData } from "../../utils/fetchData";
import MovieCard from "../../components/MovieCard";

export default function Movies({ movies, genres }) {
  const [genreId, setGenreId] = useState("");

  const filteredMovies = genreId
    ? movies.filter((m) => m.genreId === genreId)
    : movies;

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "40px 24px",
      }}
    >
      <Typography variant="h4" color="textPrimary" gutterBottom>
        All Movies
      </Typography>

      <TextField
        select
        label="Filter by Genre"
        value={genreId}
        onChange={(e) => setGenreId(e.target.value)}
        sx={{ mb: 4, width: 250 }}
      >
        <MenuItem value="">All Genres</MenuItem>
        {genres.map((genre) => (
          <MenuItem key={genre.id} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const { movies, genres } = await fetchData();
  return {
    props: {
      movies,
      genres,
    },
    revalidate: 120,
  };
}
