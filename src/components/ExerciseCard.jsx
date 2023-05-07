import React from "react";
import { Button, Stack, Typography, capitalize } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
    return (
        <Link
            className="exercise-card"
            to={`/exercise/${exercise.id}`}
        >
            <img
                src={exercise.gifUrl}
                alt={exercise.name}
                loading="lazy"
            />
            <Stack direction='row'>
                <Button
                    sx={{
                        ml: '21px',
                        color: 'white',
                        background: '#FFA9A9',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize'
                    }}
                >
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: '21px',
                        color: 'white',
                        background: '#FCC757',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize'
                    }}
                >
                    {exercise.target}
                </Button>
            </Stack>
            <Typography
                ml='20px'
                color='black'
                fontWeight='600'
                mt='11px'
                pb='10px'
                textTransform='capitalize'
            >
                {exercise.name}
            </Typography>
          </Link>
    );
};

export default ExerciseCard;
