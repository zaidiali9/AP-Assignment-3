import { Box, Typography } from "@mui/material";
import { fetchData } from '../utils/fetchData';
import MovieCard from '../components/MovieCard';

import CustomButton from "../components/CustomButton";
import { useRouter } from "next/router";
import { useThemeMode } from "../contexts/ThemeContext";

export default function Home({ trending }) {
  
  const { mode, toggleTheme } = useThemeMode();
  const router = useRouter();
  return (
    <Box sx={{ p: 5, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Trending Movies
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {trending.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </Box>

      <Box sx={{display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>

      <CustomButton
         
        onClick={() => router.push("/genres")}
        >
        Browse Genres
      </CustomButton>
      <CustomButton   onClick={toggleTheme}>
        {mode === "light" ? " Dark Mode" : " Light Mode"}
      </CustomButton>
        </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const { movies } = await fetchData();
  const trending = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  return { props: { trending }, revalidate: 60 };
}
