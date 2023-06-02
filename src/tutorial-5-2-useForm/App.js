import React from 'react'
import PersonalInfoForm from './forms/PersonalInfoForm';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    firstName: yup.string().min(2, 'Имя должно содержать минимум 2 символа').required('Это обязательное поле'),
    lastName: yup.string().min(2, 'Фамилия должна содержать минимум 2 символа').required('Это обязательное поле'),
    email: yup.string().email('Неверная почта').required('Укажите почту'),
  });

function App() {
    const methods = useForm({
        resolver: yupResolver(schema),
      });

    const onSubmit = (values) => {
        console.log(values)
        methods.reset({firstName: '', lastName: '', password: '', email: ''})
    }

  return (
    <div className='App'>
        <FormProvider {...methods}>
        <PersonalInfoForm  onSubmit={onSubmit} />
        </FormProvider>
    </div>
  );
}

export default App;
