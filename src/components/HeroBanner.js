import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Button from '@mui/material/Button';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' }
            }}
            position='relative'
            p='20px'
        >
            <Typography
                color="red"
                fontWeight="600"
                fontSize="25px"
            >
                Workout Club
            </Typography>
            <Typography
                fontWeight='700'
                sx={{
                    fontSize: { lg: '44px', xs: '40px' }
                }}
                mb="20px"
                mr='25px'
            >
                sweat , smile <br /> and repeat
            </Typography>
            <Typography
                fontSize='24px'
                lineHeight='35px'
                mb='20px'
            >
                Checkout the most effective Workouts
            </Typography>
            <Button
                variant="contained"
                color="error"
                p='10px'
            >
                To Explore More , scroll Below
            </Button>
            <Typography
                fontWeight='700'
                color='red'
                fontSize='200px'
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' }
                }}
            >
                Workout Now
            </Typography>
            <img
                src={HeroBannerImage}
                alt='banner'
                className="hero-banner-img"
            />
        </Box>
    );
};

export default HeroBanner;
