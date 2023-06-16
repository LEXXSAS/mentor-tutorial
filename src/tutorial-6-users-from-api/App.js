import React from 'react'
import { Box, Button, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import UserForm from './forms/UserForm';


const schema = yup.object().shape({
  username: yup.string().min(2, 'Имя пользователя должно содержать минимум 2 символа').required('Это обязательное поле'),
});

function App() {
    const [users, setUsers] = React.useState([]);
    const [form, setForm] = React.useState({
        username: '',
    })

    const methods = useForm({
      resolver: yupResolver(schema),
    });

    // const isValid = (name) => name.length < 2;

    // const getUsers = () => {
    //     fetch('https://6479b0d7a455e257fa639154.mockapi.io/users').then((res) => {
    //         res.json().then((result) => {
    //             setUsers(result);
    //         })
    //     })
    // }

    async function getUsers() {
        try {
          const res = await axios.get(`https://6479b0d7a455e257fa639154.mockapi.io/userstwo`);
              setUsers(res.data)
          } catch(isError) {
              console.log(isError)
          }
      }
    
      async function createUser() {
        try {
            if (form.username.length > 1) {
                await axios.post(`https://6479b0d7a455e257fa639154.mockapi.io/userstwo`, form)
                .then((res) => {
                  alert('Пользователь добавлен!')
                  getUsers()
                  methods.reset({username: ''})
                  // setForm({
                  //     username: '',
                  // })
                })
            }
          }
          catch(error) {
              console.log(error)
          }
      }

      async function deleteUser(id) {
        try {
          await axios.delete(`https://6479b0d7a455e257fa639154.mockapi.io/userstwo/${id}`)
          .then((res) => {
            getUsers()
          })
          } catch(error) {
              console.log(error)
          }
      }

      const [uploading, setUploading] = React.useState(false);

      const uploadFile = async() => {
        const fileElem = document.querySelector('#file');
        const file = fileElem.files[0];

        setUploading(true);

        const formData = new FormData();
        formData.append('file', file);
        await axios.post('http://localhost:9999', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        })

        setUploading(false);
      }

  return (
    <div className='App'>
        <FormProvider {...methods}>
        <Box sx={{p: 2, pb: 0, width: 360}}>
        <Stack spacing={1} direction='column' className='btns'>
                <Button onClick={getUsers} variant='contained' color='primary' size='small'>Получить список пользователей</Button>
            </Stack>
        </Box>
        <Box sx={{p: 2, width: 360}}>

            {users.length > 0 ? <TableContainer component={Paper}>
      <Table sx={{ minWidth: 325 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {/* <TableCell ></TableCell> */}
            <TableCell align="left">Пользователь</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((obj) => (
            <TableRow key={obj.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"> {obj.username}</TableCell>
              <TableCell align='right'><Button onClick={() => deleteUser(obj.id)} variant='contained' color='primary' size='small'>X</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> : null}
        </Box>
        <hr />
        <UserForm createUser={createUser} form={form} setForm={setForm} />
        <h4>Загрузка файла:</h4>
        <input id='file' type='file' />
        <Button disabled={uploading} onClick={uploadFile} variant='contained' color='primary' size='small'>Загрузить</Button>
        {uploading && <p><b>Идёт загрузка...</b></p>}
        {/* <Box sx={{p: 2, width: 360}}>
            <Stack spacing={1} direction='column' className='btns'>
            <h4>Создать пользователя:</h4>
            <TextField required error={isValid(form.username)} helperText={isValid(form.username) ? 'Имя должно содержать больше 2 символов' : ''} name='username' type="text" placeholder='Имя пользователя' id='username' variant='outlined' value={form.username} onChange={e => setForm({...form, username: e.target.value})} />
                <Button onClick={createUser} variant='contained' color='primary' size='small'>Добавить пользователя</Button>
            </Stack>
        </Box> */}
        </FormProvider>
    </div>
  );
}

export default App;
