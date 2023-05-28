import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';


function App() {
    const {handleSubmit, register, reset, formState} = useForm();
    const onSubmit = values => {
            console.log(values);
            reset({firstName: '', lastName: '', password: '', email: ''})
    };
    // console.log(formState.errors)

  return (
    <div className='App'>
    <Box sx={{m: 1}}>
        <div style={{display: 'flex'}}>
        <TextField {...register('firstName', {required: 'это обязательное поле'})} helperText={formState.errors.firstName && formState.errors.firstName.message} error={!!formState.errors.firstName} name='firstName' label="Имя" variant='standard' fullWidth />
        <TextField {...register('lastName', {required: 'это обязательное поле'})} helperText={formState.errors.lastName && formState.errors.lastName.message} error={!!formState.errors.lastName} name='lastName' label="Фамилия" variant='standard' fullWidth />
        </div>
        <div style={{display: 'flex'}}>
        <TextField {...register('email', {required: 'это обязательное поле', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Это неверная почта!'},})} helperText={formState.errors.email && formState.errors.email.message} error={!!formState.errors.email} name='email' label="Email" variant='standard' fullWidth />
        <TextField {...register('password', {required: 'это обязательное поле'})} helperText={formState.errors.password && formState.errors.password.message} error={!!formState.errors.password} name='password' type='password' label="Пароль" variant='standard' fullWidth />
        </div>
        <br />
        <div style={{display: 'flex'}}>
        <Button onClick={handleSubmit(onSubmit)} variant='contained' color='primary'>Зарегистрироваться</Button>
        <Button onClick={() => reset({firstName: '', lastName: '', password: '', email: ''})} variant='contained' color='secondary'>Очистить</Button>
        </div>
    </Box>
    </div>
  );
}

export default App;
