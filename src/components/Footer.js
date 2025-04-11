import React from 'react';
import { Box,Stack,Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box bgcolor={"#fff3f4"}>
      <Stack gap={'40px'} sx={{alignItems:'center'}} px={'40px'} paddingTop={'24px'}>
        <img src={Logo} width={'200px'} height={'40px'} />
        <Typography variant='h5' pb={'40px'} mt={'20px'}>
          Made with Love 
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer