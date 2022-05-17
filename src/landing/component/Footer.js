import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import Linkedin from './icon/Linkedin.png'
import Telegram from './icon/Telegram.png'
import Twitter from './icon/Twitter.png'
import Instagram from './icon/Instagram.png'
import Gmail from './icon/Gmail.png'

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, mt: 5, width: '90%' }}>
      <Grid container spacing={2} sx={{m: 5}}>
        <Grid item md={4}>
          <Box>
            <Typography variant="h6" gutterBottom component="div">
              About
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              <a href='https://www.sweetgum.xyz/' >HODO</a>
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
          <Typography variant="h6" gutterBottom component="div" sx={{ml: 1}}>
              Contact
            </Typography>
            <Typography variant="body1" gutterBottom component="div" sx={{ml: 1}}>
              <a href='https://www.sweetgum.xyz/'>contact@sweetgum.xyz</a>
            </Typography>
            <Stack direction="row" spacing={1} sx={{my: 'auto', mx: 0}}>
              <IconButton><img src={Linkedin} width={24} height={24}/></IconButton>
              <IconButton><img src={Telegram} width={24} height={24}/></IconButton>
              <IconButton><img src={Twitter} width={24} height={24}/></IconButton>
              <IconButton><img src={Instagram} width={24} height={24}/></IconButton>
              <IconButton><img src={Gmail} width={24} height={24}/></IconButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box>
            <Typography variant="h6" gutterBottom component="div" sx={{ml: 1}}>
              Newsletter
            </Typography>

            <Typography variant="body1" gutterBottom component="div" sx={{ml: 1}}>
              Enter your e-mail to follow GreenFi revolution
            </Typography>

            <Paper
              component="form"
              sx={{ p: '0px', display: 'flex', alignItems: 'center', width: '100%', borderRadius: '5px'}}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Your E-mail"
                inputProps={{ 'aria-label': 'Your E-mail' }}
              />
              <Button type="submit" variant='contained' sx={{ p: '10px', borderRadius: '0 5px 5px 0'}} aria-label="search">
                Submit
              </Button>
            </Paper>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
