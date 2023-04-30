import React from 'react'
import { Button } from 'react-bootstrap';
import art from '../img/400-1unsplash.jpg'

const Fullpost = ({id}) => {
    
    return (
        <div className="full-post">
        <h1>Статья №{id}</h1>
        <img src={art} alt="Article" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
          aliquam amet asperiores aut eius minima, nemo nostrum perspiciatis
          praesentium rerum tempora temporibus vero. Fugiat illo labore maiores
          quam sit?</p>
        <a href="/">
          <Button>Назад</Button>
        </a>
      </div>
    );
}

export default Fullpost;
