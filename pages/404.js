import CustomButton from '../components/CustomButton';
import { Box, Typography } from '@mui/material';
 
export default function Custom404() {
  return (
    <Box   sx={{ textAlign: 'center', py: 10 }}>
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant='body1'>
      Oops! The page you&apos;re looking for isn&apos;t here.
      </Typography>
       
          <CustomButton href={"/"}variant='outlined' sx={{marginY:"20px",padding:"8px 16px",width:"300px"}}>Go To Home</CustomButton>
     
    </Box>
  );
}