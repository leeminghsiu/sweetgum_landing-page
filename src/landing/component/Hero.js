import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import ThreeD from './ThreeD'
import '../App.css'

export default function Hero() {
  return (
    <Box className='herobox' sx={{display: 'flex','& > :not(style)': {mt: 5, width: '100%'}}}>
        <Paper className='hero_paper'  elevation={0} 
                sx={{display: 'flex', alignItems: 'center', bgcolor: '#ffffff',
                '@media (max-width: 780px)': {flexDirection:'column', alignItems: 'center'}
                }}>
          <Box sx={{flexGrow: 1}}>
            <Box sx={{width: '60%', mx: 'auto','@media (max-width: 780px)': {width: '85%'}}}>
              <Typography variant="h4" gutterBottom component="div" sx={{fontFamily: 'Montserrat'}}>
                Engaging everyone to fight <Typography variant="h4"  component='span' color={ 'primary' }> climate change </Typography>
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Sweetgum Labs is building a Web3 infrastructure for environmental stewardship #GreenFi
              </Typography>
              <Box sx={{display: 'flex', width: '100%', 
              '@media (max-width: 780px)': {flexDirection:'column', alignItems: 'center'}}}>
                <Button className='btn' variant='contained' sx={{width: '50%', m: 1, ml: 0, fontFamily: 'Montserrat',
                '@media (max-width: 780px)': {marginLeft: '10px'}}}>VISION PAPER</Button>
                <Button className='btn' variant='outlined' sx={{width: '50%', m: 1, fontFamily: 'Montserrat'}}>PARTNER WITH US</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{flexGrow: 0, height: 450, width: 450,
          '@media (max-width: 780px)': {width: '80vw', height: '80vw'}
          }}>
            <ThreeD />
          </Box>
        </Paper>
    </Box>
  );
}