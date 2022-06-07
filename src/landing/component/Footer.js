import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import Linkedin from './icon/Linkedin.png'
import Telegram from './icon/Telegram.png'
import Twitter from './icon/Twitter.png'
import discord from './icon/discord.png'
import medium from './icon/medium.png'

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, mt: 5, width: '90%' }}>
      <Grid container spacing={2} sx={{m: 5}}>
        <Grid item md={4}>
          <Box>
            <Typography variant="h6" gutterBottom component="div" fontFamily={'Montserrat'} sx={{fontWeight: '700'}}>
              About
            </Typography>
            <Typography variant="body1" gutterBottom component="div" >
              <a href='https://www.sweetgum.xyz/' >OFFSET</a>
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              <a href='https://www.sweetgum.xyz/'>Terms of Service</a>
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              <a href='https://www.sweetgum.xyz/'>Privacy Policy</a>
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box>
          <Typography variant="h6" gutterBottom component="div" fontFamily={'Montserrat'} sx={{ml: 1, fontWeight: '700'} }>
              Contact
            </Typography>
            <Typography variant="body1" gutterBottom component="div" sx={{ml: 1}}>
              <a href='https://www.sweetgum.xyz/'>contact@sweetgum.xyz</a>
            </Typography>
            <Stack direction="row" spacing={1} sx={{my: 'auto', mx: 0}}>
            <IconButton href='https://www.linkedin.com/company/79378502/admin/'><img src={Linkedin} width={24} height={24} alt='icon' /></IconButton>
        <IconButton href='https://t.me/MOTEgroup'><img src={Telegram} width={24} height={24} alt='icon' /></IconButton>
        <IconButton href='https://twitter.com/0xMote'><img src={Twitter} width={24} height={24} alt='icon' /></IconButton>
        <IconButton href='https://discord.gg/x2jtX6Nj'><img src={discord} width={24} height={24} alt='icon' /></IconButton>
        <IconButton href='https://medium.com/@sweetgumlabs'><img src={medium} width={24} height={24} alt='icon' /></IconButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box>
            <Typography variant="h6" gutterBottom component="div" fontFamily={'Montserrat'} sx={{ml: 1 , fontWeight: '700'}}>
              Newsletter
            </Typography>

            <Typography variant="body1" gutterBottom component="div" sx={{ml: 1}}>
              Enter your e-mail to follow #GreenFi revolution
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
                Subscribe
              </Button>
            </Paper>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
