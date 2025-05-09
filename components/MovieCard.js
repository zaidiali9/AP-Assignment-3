import { Box, Card, CardContent, Typography, Rating, useTheme } from "@mui/material";
import CustomButton from "../components/CustomButton";
import Link from "next/link";

export default function MovieCard({ movie }) {
     const theme = useTheme(); 
    
      const isDark = theme.palette.mode === 'dark';
    
  return (
    <Box
    sx={{
      border: `1px solid ${isDark ? "#ddd" : "#000"}`,
      backgroundColor: isDark ? "#121212" : "#fff",
      color: isDark ? "#eee" : "#111",
      width: 340,
      m: 2,
      p: 2,
      borderRadius: 3,
    }}
  >
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          {movie.description}
        </Typography>
              <Typography variant="caption" sx={{ ml: 1 }}>
          {movie.rating}/10
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link href={`/movies/${movie.id}`}  >
            <CustomButton   size="small">Details</CustomButton>
          </Link>
        </Box>
   </Box>
  
     
  );
}
