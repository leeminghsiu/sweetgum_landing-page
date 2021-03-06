import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function SmallCards() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between' ,mt: 10, '@media (max-width: 780px)': {flexDirection:'column', alignItems: 'center'}}}>
      <Paper elevation={10} sx={{width: '30%', display: 'flex', backgroundColor: '#FBFCFF',
    '@media (max-width: 780px)': {width: '100%'}
                            }}>
        <Box sx={{m: 3, display: 'flex', flexDirection: 'column', alignItems:'center'}}>
          <Typography variant="h5" gutterBottom component="div" >
            <Typography variant="h5"  component='span' color={ 'primary' }> Green </Typography> Academy
          </Typography>
          <Typography variant="body1" gutterBottom component="div" sx={{flexGrow: 1}}>
          <Typography variant="body1" gutterBottom component="div" fontWeight={'bold'}>Learn all about sustainability and ESG</Typography>
          Series of interesting blog posts, videos, and webinars to learn everything about sustainability and environmental impact. 
          It is now learn-to-earn and we've got you covered. 
          </Typography>
          <Button variant='contained' disabled sx={{mx: 'auto', mt: 2, color: '#000000'}}>UPCOMING</Button>
        </Box>
      </Paper>

      <Paper elevation={10} sx={{width: '30%', display: 'flex', backgroundColor: '#FBFCFF',
    '@media (max-width: 780px)': {width: '100%', marginTop: '1rem'}}}>
        <Box sx={{m: 3, display: 'flex', flexDirection: 'column', alignItems:'center'}}>
          <Typography variant="h5" gutterBottom component="div">
            <Typography variant="h5"  component='span' color={ 'primary' } > Green </Typography> Fellowship
          </Typography>
          <Typography variant="body1" gutterBottom component="div" sx={{flexGrow: 1}}>
          <Typography variant="body1" gutterBottom component="div" fontWeight={'bold'}>Receive support for launching globally</Typography>
            Semester-long fellowship program with token incentive to cultivate a environmental-conscious community around you.
            Web3 environmental revolution starting from your community. 
          </Typography>
          <Button variant='contained' disabled sx={{mx: 'auto', mt: 2, color: '#000000'}}>UPCOMING</Button>
        </Box>
      </Paper>

      <Paper elevation={10} sx={{width: '30%', display: 'flex', backgroundColor: '#FBFCFF',
    '@media (max-width: 780px)': {width: '100%', marginTop: '1rem'}}}>
        <Box sx={{m: 3, display: 'flex', flexDirection: 'column', alignItems:'center'}}>
          <Typography variant="h5" gutterBottom component="div">
          < Typography variant="h5"  component='span' color={ 'primary' }> Green </Typography> Partnership
          </Typography>
          <Typography variant="body1" gutterBottom component="div" sx={{flexGrow: 1}}>
          <Typography variant="body1" gutterBottom component="div" fontWeight={'bold'}>Working with top companies on ESG </Typography>
            Long-term strategic initatives to work with environmentally friendly and sustainable companies to incentivize climate actions and behavior changes.
            Global partnerships with leading companies to delivery impact. 
          </Typography>
          <Button variant='contained' disabled sx={{mx: 'auto', mt: 2, color: '#000000'}}>UPCOMING</Button>
        </Box>
      </Paper>

  </Box>
  );
}