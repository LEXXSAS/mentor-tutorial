import React from 'react'
import { Box, Button, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import axios from 'axios';


function App() {
    const [users, setUsers] = React.useState([]);

    // const getUsers = () => {
    //     fetch('https://6479b0d7a455e257fa639154.mockapi.io/users').then((res) => {
    //         res.json().then((result) => {
    //             setUsers(result);
    //         })
    //     })
    // }

    async function getUsers() {
        try {
          await axios.get(`https://6479b0d7a455e257fa639154.mockapi.io/users`)
          .then((res) => {
                setUsers(res.data)
          })
          } catch(isError) {
              console.log(isError)
          }
      }

    console.log(users)

  return (
    <div className='App'>
        <div>
        <Box sx={{p: 2, width: 325}}>
            <Stack spacing={1} direction='column' className='btns'>
                <Button onClick={getUsers} variant='contained' color='primary' size='small'>Получить список пользователей</Button>
            </Stack>
            {users.length > 0 ? <Paper sx={{p: 3, pl: 0}} elevation={2}>
            <ul>
            {users.map((obj) => (
                <li key={obj.id}>{obj.name}</li>
            ))}
            </ul>
            </Paper> : null}
            </Box>
        </div>
    </div>
  );
}

export default App;
