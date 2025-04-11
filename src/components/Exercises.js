import React,{useEffect, useState} from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack,Typography} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ setExercises, bodyPart, exercises}) => {
  /* Starting from page -1 */
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 3;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise);
  const paginate = (e,value) => {
    setCurrentPage(value);

    window.scrollTo({top:1800,behavior:'smooth'})
    }

    useEffect(() => {
      const fetchExercisesData = async () => {
        // Clear exercises before fetching new data
        setExercises([]);
    
        let exerciseData = [];
        if (bodyPart === 'all') {
          exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
          exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
    
        setTimeout(() => {
          setExercises(exerciseData); // Set fetched data after a delay
        }, 200); // Delay of 500ms for smooth UX
      };
    
      fetchExercisesData();
    }, [bodyPart]);
    

  return (
    <Box id="exercises" sx={{mt:{lg:'110px'}}} mt={'50px'} p={'20px'}>
      <Typography variant='h3' mb={'46px'}>
        Showing Results
      </Typography>

      <Stack direction={'row'} sx={{gap:{lg:'110px',xs:'50px'}}}flexWrap={'wrap'} justifyContent={'center'}>
      {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>

           {/* pagination part edu  */}
      <Stack mt={'100px'} alignItems={'center'}>
        {exercises.length > exercisesPerPage && (
          <Pagination color='standard'
          shape='rounded'
          defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large' />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises