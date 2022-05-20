import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Person from './Person';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import '../App.css'
export default function Team() {
  return (
    <Box sx={{mt: 10}}>
        <Paper elevation={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5, boxShadow :'10px 20px 20px rgba(0, 0, 0, 0.2)'}}>
          <Typography variant="h4" gutterBottom component="div">
            Leading <Typography variant="h4"  component='span' color={ 'primary' }> GreenFi </Typography> Revolution
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Carbon neutral by 2050 is the most imperative mission in human history
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 3, md: 5 }}>
              <Grid item xs={1} sm={1} md={1}><Person /></Grid>
              <Grid item xs={1} sm={1} md={1}><Person /></Grid>
              <Grid item xs={1} sm={1} md={1}><Person /></Grid>
              <Grid item xs={1} sm={1} md={1}><Person /></Grid>
              <Grid item xs={1} sm={1} md={1}><Person /></Grid>
              <Grid item xs={1} sm={1} md={1}><Person /></Grid>
              <Grid item xs={1} sm={1} md={1}><Person /></Grid>
              <Grid item xs={1} sm={1} md={1}><Person /></Grid>
              <Grid item xs={1} sm={1} md={1}><Person /></Grid>
              <Grid item xs={1} sm={1} md={1}><Person /></Grid>

            </Grid>
          </Box>

        </Paper>
    </Box>
  );
}