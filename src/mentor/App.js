import React from 'react'
import { useState, useEffect } from 'react';
import { Stack, accordionActionsClasses } from '@mui/material';
import Button from '@mui/material/Button';
import Count from './Count';

function App() {
    const [visibleList, setVisibleList] = useState(true);

    const arr = [1, 2, 3];
    const [number, setNumber] = useState(arr)



    function randomNumber() {
        return Math.floor(Math.random() * 10);
    }

    const addNumber = () => {
        const newNumber = randomNumber();
        setNumber([...number, newNumber]);
    }



    function showHide() {
        setVisibleList((visibleList) => !visibleList);
    }

    // componentDidMount





    // React.useEffect(() => {
    //     console.log('ComponentDidUpdate')
    // }, [number])


  return (
    <div className="App">
        {visibleList && <Count number={number} />}
        <br />
        <Stack direction='row' spacing={1}>
        <Button onClick={addNumber} variant='contained'>add number</Button>
        <Button onClick={showHide} variant='contained'>show / hide</Button>
        </Stack>
    </div>
  );
}

export default App;
