import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function GreenToEarn() {
  return (
    <Box sx={{display: 'flex', '& > :not(style)': {mt: 5, width: '100%'}}}>
        <Paper elevation={20} sx={{display: 'flex', alignItems: 'center', 
                                  boxShadow: '30px 40px 50px rgba(174, 246, 173, 67)', bgcolor: '#F8F8FA',
                                  '@media (max-width: 780px)': {flexDirection:'column', alignItems: 'center'}
                                  }}>
          <Box sx={{width: '50%', display: 'flex'}}><Button variant='contained' 
          sx={{m: 'auto','@media (max-width: 780px)': {display:'none'}}}>
            SAVE THE EARTH</Button></Box>
          <Box sx={{width: '50%', display: 'flex', '@media (max-width: 780px)': {width: '100%'}}}>
            <Box sx={{m: 10}}>
              <Typography variant="h4" gutterBottom component="div">
              <Typography variant="h4"  component='span' color={ 'primary' }> Green </Typography>-to-earn
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                A rewarding sustainable lifestyle <br/>
                Reduce carbon emissions, earn tokens, and grow your green metaverse for exciting token and NFT rewards.
              </Typography>
              <Button variant='contained' 
          sx={{mt: 5,'@media (min-width: 780px)': {display:'none'}}}>
            SAVE THE EARTH</Button>
            </Box>
          </Box>
        </Paper>
    </Box>
  );
}