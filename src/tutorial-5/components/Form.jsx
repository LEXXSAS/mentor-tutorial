import React from 'react'
import { AppContext } from '../context';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

function Form() {
    const {addComment} = React.useContext(AppContext);

    return (
        <div>

            <Card style={{maxWidth: 450, margin: '0 auto', padding: '5px 5px 5px 5px'}}>
                <CardContent>
                    <Typography gutterBottom style={{marginBottom: '1rem'}} variant="h6" color="initial">Обратная связь:</Typography>
                    <form action="submit" onSubmit={addComment}>
                        <Grid container spacing={2} >
                                <Grid xs={12} item>
                                <TextField
                                type='text'
                                id="fullName"
                                label="Введите имя"
                                variant="outlined"
                                placeholder='Введите имя'
                                required
                                fullWidth />
                                </Grid>
                                <Grid xs={12} item>
                                <TextField
                                type='email'
                                id="email"
                                label="Введите email"
                                variant="outlined"
                                placeholder='Введите email'
                                required
                                fullWidth />
                                </Grid>
                                <Grid xs={12} item>
                                <TextField
                                type='text'
                                id="text"
                                multiline
                                rows={4}
                                variant="outlined"
                                label="Введите текст"
                                placeholder='Введите текст'
                                required
                                fullWidth />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type='submit' variant='contained' color='primary' fullWidth >Добавить отзыв</Button>
                                </Grid>
                            </Grid>
                    </form>
                </CardContent>
            </Card>

        </div>
    );
}

export default Form


{/* <label htmlFor="text">Имя</label>
<input type="text" name="fullName" id="fullName" placeholder='Введите имя' required />
<label htmlFor="email">Почта</label>
<input type="email" name="email" id="email" placeholder='Введите email' required />
<label htmlFor="comment">Комментарий</label>
<input type="text" name="text" id="text" placeholder='Введите текст' required />
<button type='submit'>Add comment</button> */}
