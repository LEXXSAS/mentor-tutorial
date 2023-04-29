import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../tutorial-5/context';
import Form from './components/Form';
import Comments from './components/Comments';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'


function App() {
    let example = { 
        fullName: "Иван Васильевич",
        email: "vasya@mail.ru",
        createdAt: "Thu Oct 14 2022 13:41:01",
        text: "working"
    }

    let arr = [];

  //   const [inputs, setInputs] = React.useState({
  //     fullName: '',
  //     email: '',
  //     text: '',
  // });
  
  // const handleChange = (event) => {
  //     setInputs(prevState => ({
  //         ...prevState,
  //         [event.target.id]:[event.target.value],
  //     }))
  // }

    function getCurrentDate() {
      let newDate = new Date();
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();

      function monthConvert(month) {
        return month > 12 || month < 1
        ? null
        : 
        'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[month - 1];
      }
      let nowMonth = monthConvert(month);
      let fullDate = `${date} ${nowMonth} ${year}`;
      return fullDate;
    }
    
    function addComment(event) {
        event.preventDefault()
        // let [fullName] = [inputs.fullName];

        let fullName = event.target.fullName.value;
        let email = event.target.email.value;
        let text = event.target.text.value;

        let currentDate = getCurrentDate();

        arr.push({fullName, email, text, currentDate});
        

        setComments([...comments, ...arr])
        event.target.reset();
        
        // window.location.reload()
    }

    const getLocalItems = () => {
        let list = localStorage.getItem('comments');
    
        if (list) {
          return JSON.parse(localStorage.getItem('comments'));
        } else {
          return []
        }
      }

    function removeComment(ind) {
      let newList = [...comments].filter((item, index) => index !== ind)
      // console.log(newList)
      setComments(newList)
    }

    const [comments, setComments] = useState(getLocalItems());

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments))
    }, [comments])


  return (
    <div className='App'>
      <Container maxWidth="xs">
        <AppContext.Provider value={{comments, addComment, removeComment}}>
        <Typography gutterBottom variant="h6" color="initial">Отзывы:</Typography>
        {(comments == '') && <Typography gutterBottom variant="subtitle1" color="initial"><p>Список отзывов пуст</p></Typography>}
              <Comments />
              <Form />
          </AppContext.Provider>
      </Container>

    </div>
  );
}

export default App;
