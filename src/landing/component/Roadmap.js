import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function Roadmap() {
  return (
    <Box>
        <Paper elevation={3} sx={{display: 'flex', flexGrow: 1, my: 5, width: '100%', height: 300, alignItems: 'center', justifyContent: 'center', boxShadow :'10px 20px 20px rgba(0, 0, 0, 0.2)'}}>
          <Box>Roadmap</Box>
        </Paper>
    </Box>
  );
}