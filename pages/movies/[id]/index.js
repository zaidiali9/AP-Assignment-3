import { Box, Typography,   } from "@mui/material";
import Link from "next/link";
import { fetchData } from '../../../utils/fetchData';

export default function Movie({ movie, director }) {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4">{movie.title}</Typography>
      <Typography sx={{ mt: 2 }}>{movie.description}</Typography>
      <Typography sx={{ mt: 2 }}>Release Year: {movie.releaseYear}</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Typography sx={{ ml: 1 }}>{movie.rating}/10</Typography>
      </Box>
      <Link   href={`/movies/${movie.id}/director`}>
        
          Director: {director.name}
        
      </Link>
    </Box>
  );
}

export async function getStaticPaths() {
  const { movies } = await fetchData();
  const paths = movies.map((m) => ({ params: { id: m.id } }));  
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const data = await fetchData();
  const movie = data.movies.find((m) => m.id === params.id);
  if (!movie) return { notFound: true };
  const director = data.directors.find((d) => d.id === movie.directorId);
  return { props: { movie, director }, revalidate: 60 };
}
