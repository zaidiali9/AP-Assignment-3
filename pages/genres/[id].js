import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { fetchData } from "../../utils/fetchData";
import MovieCard from "../../components/MovieCard";

const DetailGenres = ({ genre, movies }) => {
  const theme = useTheme();  // ✅ Access MUI theme
  const bgColor = theme.palette.background.default;
  const textColor = theme.palette.text.primary;

  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        minHeight: "100vh",
        padding: "40px 24px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        {genre.name} Movies
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {movies.length > 0 ? (
          movies.map((m) => <MovieCard key={m.id} movie={m} />)
        ) : (
          <Typography>No movies found in this genre.</Typography>
        )}
      </Box>
    </Box>
  );
};

 
export default DetailGenres
export async function getStaticPaths() {
  const { genres } = await fetchData();

  const paths = genres.map((g) => ({
    params: { id: g.id },
  }));

  return {
    paths,
    fallback: "blocking",  
  };
}

export async function getStaticProps({ params }) {
  const { genres, movies } = await fetchData();

  const genre = genres.find((g) => g.id === params.id);
  if (!genre) {
    return { notFound: true };
  }

  const filtered = movies.filter((m) => m.genreId === params.id);

  return {
    props: {
      genre,
      movies: filtered,
    },
    revalidate: 120,  
  };
}