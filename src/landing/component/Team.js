import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Person from './Person';
import Typography from '@mui/material/Typography';

export default function Team() {
  return (
    <Box sx={{mt: 10}}>
        <Paper elevation={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5}}>
          <Typography variant="h4" gutterBottom component="div">
            Leading <Typography variant="h4"  component='span' color={ 'primary' }> GreenFi </Typography> Revolution
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Carbon neutral by 2050 is the most imperative mission in human history
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