import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import '../App.css'

import Linkedin from './icon/Linkedin.png'
import Telegram from './icon/Telegram.png'
import Twitter from './icon/Twitter.png'
import Instagram from './icon/Instagram.png'
import Gmail from './icon/Gmail.png'
import logo from './icon/Sweetgum_logo.png'
                                    

export default function Nav() {
  return (
    <Box sx={{ display: 'flex', height: '4rem', maxWidth: 'lg', mx: 'auto'}}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <img src={logo} alt="Logo" />
        <Button color='textColor' sx={{bgcolor:'#ffffff', fontWeight:'bold'}}>Green-to-earn</Button>
        <Button color='textColor' sx={{bgcolor:'#ffffff', fontWeight:'bold'}}>Vision Paper</Button>
      </Box>
      <Stack direction="row" className='nav_stack' spacing={1} sx={{my: 'auto'}}>
        <IconButton href=''><img src={Linkedin} width={24} height={24}/></IconButton>
        <IconButton href=''><img src={Telegram} width={24} height={24}/></IconButton>
        <IconButton href=''><img src={Twitter} width={24} height={24}/></IconButton>
        <IconButton href=''><img src={Instagram} width={24} height={24}/></IconButton>
        <IconButton href=''><img src={Gmail} width={24} height={24}/></IconButton>
      </Stack>
    </Box>
  );
}
