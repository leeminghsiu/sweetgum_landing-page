import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Person from './Person';
import Typography from '@mui/material/Typography';
import { Grid, Item } from '@mui/material';

export default function Partner() {
  return (
    <Box sx={{mt: 5}}>
        <Paper elevation={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5, boxShadow :'10px 20px 20px rgba(0, 0, 0, 0.2)'}}>
          <Typography variant="h4" gutterBottom component="div">
            Together, we protect the <Typography variant="h4"  component='span' color={ 'primary' }> earth </Typography>
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Partners and advisors to achieve a better and more sustainable future for all 
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