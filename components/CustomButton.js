import React from 'react';
import { Button, useTheme } from '@mui/material';

const CustomButton = ({ href, onClick, ...props }) => {
  const theme = useTheme(); 

  const isDark = theme.palette.mode === 'dark';

  return (
    <Button
      variant="contained"
      href={href}
      onClick={onClick}
      sx={{
        backgroundColor: isDark ? '#222' : '#bbb',
        color: isDark ? '#fff' : '#000',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: isDark ? '#333' : '#ccc',
        },
      }}
      {...props}
    />
  );
};

export default CustomButton;
