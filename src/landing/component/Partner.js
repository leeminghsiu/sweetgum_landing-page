import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Person from './Person';
import Typography from '@mui/material/Typography';

export default function Partner() {
  return (
    <Box sx={{mt: 5}}>
        <Paper elevation={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5}}>
          <Typography variant="h4" gutterBottom component="div">
            Together, we protect the <Typography variant="h4"  component='span' color={ 'primary' }> earth </Typography>
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Partners and advisors to achieve a better and more sustainable future for all 
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
          </Box>
        </Paper>
    </Box>
  );
}