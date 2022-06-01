import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Linkedin from './icon/Linkedin.png'
import Twitter from './icon/Twitter.png'

export default function Person(props) {
    return (
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', m: 3}}>
        <Avatar alt={props.name} src={props.img} sx={{width: 100, height: 100}}/>
        <Typography variant="body1" gutterBottom component="div" sx={{m: 0}} fontWeight={'bold'}>
        {props.name}
        </Typography>
        <Typography variant="body1" gutterBottom component="div" sx={{m: 0}}>
        {props.position}
        </Typography>

        <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
        <IconButton href={props.link} sx={{m: 0}}><img alt='linkedin' src={Linkedin} width={24} height={24} /></IconButton>
        <IconButton href={props.twitter} sx={{m: 0}}><img alt='twitter' src={Twitter} width={24} height={24} /></IconButton>
        </Box>
      </Box>
    );
  }