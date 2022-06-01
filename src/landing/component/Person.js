import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Example from './profile/example.jpeg'
import Linkedin from './icon/Linkedin.png'
import Twitter from './icon/Twitter.png'

export default function Person() {
    return (
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', m: 3}}>
        <Avatar alt="Remy Sharp" src={Example} sx={{width: 100, height: 100}}/>
        <Typography variant="body1" gutterBottom component="div" sx={{m: 0}} fontWeight={'bold'}>
        Jing Sun
        </Typography>
        <Typography variant="body1" gutterBottom component="div" sx={{m: 0}}>
        IoTeX
        </Typography>

        <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
        <IconButton sx={{m: 0}}><img src={Linkedin} width={24} height={24}/></IconButton>
        <IconButton sx={{m: 0}}><img src={Twitter} width={24} height={24}/></IconButton>
        </Box>
      </Box>
    );
  }