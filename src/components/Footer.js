import React from 'react'
import { Box , Stack , Typography } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box
    marginTop='80px'
    bgcolor='#fff3f4'
    >
      <Stack
      gap='40px'
      alignItems='center'
      px='40px'
      pt='24px'
      >
        <img
        width='200px'
        height='40px'
        src={Logo}
        alt={`logo`}
        />
        <Typography></Typography>
      </Stack>
    </Box>
  )
}

export default Footer
