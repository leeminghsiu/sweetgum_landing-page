import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function SmallCards() {
  return (
    <Stack direction="row" spacing={3} sx={{mt: 10}}>
      <Paper elevation={20} sx={{width: '33%', display: 'flex', boxShadow: '20px 30px 50px rgba(174, 246, 173, 67)'}}>
        <Box sx={{m: 3, display: 'flex', flexDirection: 'column'}}>
          <Typography variant="h5" gutterBottom component="div">
            <Typography variant="h5"  component='span' color={ 'primary' }> Green </Typography> Academy
          </Typography>
          <Typography variant="body1" gutterBottom component="div" sx={{flexGrow: 1}}>
            A rewarding sustainable lifestyle <br/>
            Reduce carbon emissions, earn tokens, and grow your green metaverse for exciting token and NFT rewards.
          </Typography>
          <Button variant='contained' disabled sx={{mx: 'auto', mt: 2, color: '#000000'}}>UPCOMING</Button>
        </Box>
      </Paper>

      <Paper elevation={20} sx={{width: '33%', display: 'flex', boxShadow: '20px 30px 50px rgba(174, 246, 173, 67)'}}>
        <Box sx={{m: 3, display: 'flex', flexDirection: 'column'}}>
          <Typography variant="h5" gutterBottom component="div">
            <Typography variant="h5"  component='span' color={ 'primary' }> Green </Typography> Fellowship
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Receive support for launching locally <br />
            Semester-long fellowship program with token incentive to cultivate a environmental-conscious community around you.
            Web3 environmental revolution starting from your community. 
          </Typography>
          <Button variant='contained' disabled sx={{mx: 'auto', mt: 2, color: '#000000'}}>UPCOMING</Button>
        </Box>
      </Paper>

      <Paper elevation={20} sx={{width: '33%', display: 'flex', boxShadow: '20px 30px 50px rgba(174, 246, 173, 67)'}}>
        <Box sx={{m: 3, display: 'flex', flexDirection: 'column'}}>
          <Typography variant="h5" gutterBottom component="div">
          < Typography variant="h5"  component='span' color={ 'primary' }> Green </Typography> Partnership
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Working with top companies on ESG 
            Long-term strategic initatives to work with environmentally friendly and sustainable companies to incentivize climate actions and behavior changes.
            Global partnerships with leading companies to delivery impact. 
          </Typography>
          <Button variant='contained' disabled sx={{mx: 'auto', mt: 2, color: '#000000'}}>UPCOMING</Button>
        </Box>
      </Paper>

  </Stack>
  );
}