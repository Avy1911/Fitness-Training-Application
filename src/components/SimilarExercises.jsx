import React from 'react'
import { Box, Stack, Typography } from "@mui/material"
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box
      sx={{
        mt: { lg: '100px', xs: '0' }
      }}
    >
      <Typography
        variant='h3'
      >
        exercises that target the same muscle group
      </Typography>
      <Stack
        direction='row'
        sx={{
          p: '2',
          postion: 'realtive'
        }}
      >
        {targetMuscleExercises.length ?
          <HorizontalScrollbar data={targetMuscleExercises} />
          :
          <Loader />
        }
      </Stack>
      <Typography
        variant='h3'
      >
        exercises that use the same equipment
      </Typography>
      <Stack
        direction='row'
        sx={{
          p: '2',
          postion: 'realtive'
        }}
      >
        {equipmentExercises.length ?
          <HorizontalScrollbar data={equipmentExercises} />
          :
          <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises

