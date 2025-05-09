import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { fetchData } from '../../utils/fetchData';

export default function Genres({ genres }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" gutterBottom>
        Genres
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, flexDirection: "column" }}>
        {genres.map((g) => (
          <Box
            key={g.id}
            sx={{
              backgroundColor: isDark ? "#263238" : "#81E7AF",
              color: isDark ? "#E0F7FA" : "#037971",
              padding: "8px",
              borderRadius: 1,
              transition: "background 0.3s, color 0.3s",
            }}
          >
            <Link
              href={`/genres/${g.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "bold",
              }}
            >
              {g.name}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export async function getServerSideProps() {
  const { genres } = await fetchData();
  return { props: { genres } };
}
