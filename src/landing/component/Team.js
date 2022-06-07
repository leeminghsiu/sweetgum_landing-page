import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Person from './Person';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import '../App.css'

// profile photo
import Frank from './profile/Frank.png';
import Harrison from './profile/Harrison.png';
import Jimmy from './profile/Jimmy.png';
import Leo from './profile/Leo.png';
import Lucas from './profile/Lucas.png';
import Michael from './profile/Michael.png';
import Ricky from './profile/Ricky.png';
import Tyler from './profile/Tyler.png';
import Veenu from './profile/Veenu.png';
import Vera from './profile/Vera.png';


export default function Team() {
  return (
    <Box sx={{mt: 10}}>
        <Paper elevation={10} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5}}>
          <Typography variant="h4" gutterBottom component="div">
          Sweetgum is Leading a #<Typography variant="h4"  component='span' color={ 'primary' }> GreenFi </Typography> Revolution
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Carbon neutral by 2050 is the most imperative mission in human history
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 3, md: 5 }}>

              <Grid item xs={1} sm={1} md={1}><Person 
                img={Michael} 
                name='Michael'
                position='Founder'
                link='https://www.linkedin.com/in/michael-guan-522278105/'
                twitter='https://twitter.com/michaelguaneth'
              /></Grid>

              <Grid item xs={1} sm={1} md={1}><Person 
                img={Vera} 
                name='Vera Wang'
                position='Co-founder & CEO'  
                link='https://www.linkedin.com/in/verahewang/'
                twitter='https://twitter.com/VeraWang_eth'              
              /></Grid>

              <Grid item xs={1} sm={1} md={1}><Person 
                img={Tyler} 
                name='Tyler Li'
                position='CTO'
                link='https://www.linkedin.com/in/yuguanli/'
                twitter=''                    
              /></Grid>

              <Grid item xs={1} sm={1} md={1}><Person 
                img={Frank} 
                name='Frank Chen'
                position='CPO'  
                link='https://www.linkedin.com/in/jiadong-chen-000929b0/'
                twitter='https://twitter.com/FrankJiadong'                    
              /></Grid>

              <Grid item xs={1} sm={1} md={1}><Person 
                img={Harrison} 
                name='Harrison Meyers'
                position='Sustainbility'
                link='https://www.linkedin.com/in/harrison-meyer-081195/'
                twitter=''                      
              /></Grid>

              <Grid item xs={1} sm={1} md={1}><Person 
                img={Veenu} 
                name='Veenu King'
                position='Sustainbility'
                link='https://www.linkedin.com/in/veenu-king-19260b78/'
                twitter='https://twitter.com/king_veenu'                      
              /></Grid>

              <Grid item xs={1} sm={1} md={1}><Person 
                img={Ricky} 
                name='Ricky Wang'
                position='Partnership'
                link='https://www.linkedin.com/in/zhaoyuan-wang-74b3a0194/'
                twitter='https://twitter.com/Rickson2022'                      
              /></Grid>

              <Grid item xs={1} sm={1} md={1}><Person 
                img={Leo} 
                name='Leo Xue'
                position='Marketing'
                link='https://www.linkedin.com/in/leo-chengzhi-xue-31968b12a/'
                twitter='https://twitter.com/LeoInCrypto'                      
              /></Grid>

              <Grid item xs={1} sm={1} md={1}><Person 
                img={Jimmy} 
                name='Jimmy Carter'
                position='Developer'
                link='https://www.linkedin.com/in/jimmy-carter-514826231/'
                twitter=''                      
              /></Grid>

              <Grid item xs={1} sm={1} md={1}><Person 
                img={Lucas} 
                name='Lucas Hyatt'
                position='Developer'
                link='https://www.linkedin.com/in/lucas-hyatt-32a609173'
                twitter=''                      
              /></Grid>

            </Grid>
          </Box>

        </Paper>
    </Box>
  );
}