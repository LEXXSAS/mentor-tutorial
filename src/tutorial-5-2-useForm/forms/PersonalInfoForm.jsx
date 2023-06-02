import React from 'react'
import { Button, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import FormField from '../components/FormField';
import { useFormContext } from 'react-hook-form';

const PersonalInfoForm = ({onSubmit}) => {
    const {reset, handleSubmit} = useFormContext();

  return (
    <div>
        <Box className='row' sx={{m: 1}}>
            <FormField name='firstName' label='Имя' />
            <FormField name='lastName' label='Фамилия' />
            <FormField name='email' label='Почта' />
            <Stack spacing={1} direction='row' className='btns'>
                <Button onClick={() => reset({firstName: '', lastName: '', password: '', email: ''})} variant='contained' color='primary'>Очистить</Button>
                <Button onClick={handleSubmit(onSubmit)} variant='contained' color='primary'>Далее</Button>
            </Stack>
        </Box>
    </div>
  )
}

export default PersonalInfoForm
