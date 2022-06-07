import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

export default function GreenToEarn() {
  return (
    <Box sx={{display: 'flex', '& > :not(style)': {mt: 5, width: '100%'}}}>
        <Paper elevation={10} sx={{display: 'flex', alignItems: 'center', 
                                  '@media (max-width: 780px)': {flexDirection:'column', alignItems: 'center'}
                                  }}>
          <Box sx={{width: '40%', display: 'flex'}}><Typography 
          sx={{m: 'auto','@media (max-width: 780px)': {display:'none'}}}>
            earth pic</Typography></Box>
          <Box sx={{width: '60%', display: 'flex', '@media (max-width: 780px)': {width: '100%'}}}>
            <Box sx={{m: 7,'@media (max-width: 780px)': {margin:'2rem'}}}>
              <Typography variant="h4"  component='span' color={ 'primary' } sx={{fontFamily: 'Mulish', fontWeight: '700'}}> “OFF-SET” App</Typography>
              <Typography variant="h6" gutterBottom component="div">
                <Typography variant="h6" fontWeight={'700'}>"A rewarding sustainable lifestyle"</Typography>
                Reduce carbon emissions, earn tokens, and grow your green metaverse for rewards.
              </Typography>
              <Paper
              component="form"
              sx={{ p: '0px', display: 'flex', alignItems: 'center', width: '100%', borderRadius: '5px'}}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Your e-mail"
                inputProps={{ 'aria-label': 'Your e-mail' }}
              />
              <Button type="submit" variant='contained' sx={{ p: '10px', borderRadius: '0 5px 5px 0'}} aria-label="search">
                Join Waitlist
              </Button>
            </Paper>
              <Typography 
          sx={{mt: 5,'@media (min-width: 780px)': {display:'none'}}}>
            earth pic</Typography>
            </Box>
          </Box>
        </Paper>
    </Box>
  );
}