import { Box, Typography } from "@mui/material";
import { fetchData } from '../../../utils/fetchData';

export default function Director({ director }) {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4">{director.name}</Typography>
      <Typography sx={{ mt: 2 }}>{director.biography}</Typography>
    </Box>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { movies, directors } = await fetchData();
  const movie = movies.find((m) => m.id === params.id);
  if (!movie) return { notFound: true };
  const director = directors.find((d) => d.id === movie.directorId);
  return { props: { director }, revalidate: 60 };
}
