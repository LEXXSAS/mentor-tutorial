import React from 'react'
import { useState, useEffect, useContext } from 'react';
import {Button, Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import {Home} from './pages/Home'
import Header from './components/Header';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Fullpost from './pages/Fullpost';
import { AppContext } from './components/context';
import { Routes, Route, Link } from 'react-router-dom';


function App() {

    const posts = [
        {
          id: 1,
          imageUrl:
            "https://images.unsplash.com/photo-1635604392842-69afcee9e0ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Mnx8fHx8fDE2NDQzNjQ0MDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=460",
          title: "Статья 1",
          text:
            "С другой стороны сложившаяся структура организации способствует подготовки и реализации соответствующий условий активизации. Задача организации, в особенности же постоянное информационно-пропагандистское."
        },
        {
          id: 2,
          imageUrl:
            "https://images.unsplash.com/photo-1563257369-25d9a0367daf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Mnx8fHx8fDE2NDQzNjQ0MjY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=460",
          title: "Статья 2",
          text:
            "Идейные соображения высшего порядка, а также реализация намеченных плановых заданий позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных условий."
        },
        {
          id: 3,
          imageUrl:
            "https://images.unsplash.com/photo-1562890216-35a12862e560?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Mnx8fHx8fDE2NDQzNjQ0MzU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=460",
          title: "Статья 3",
          text:
            "Равным образом новая модель организационной деятельности требуют определения и уточнения модели развития. Не следует, однако забывать, что новая модель организационной деятельности играет важную роль в формировании новых предложений."
        },
        {
          id: 4,
          imageUrl:
            "https://images.unsplash.com/photo-1561319203-ddecbd810115?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8MXx8fHx8fDE2NDQzNjQ0NDU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=460",
          title: "Статья 4",
          text:
            "Разнообразный и богатый опыт сложившаяся структура организации позволяет оценить значение модели развития. Разнообразный и богатый опыт начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки дальнейших направлений развития."
        }
      ];

      const [showButton, setShowButton] = useState(false);

      useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 250) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
      }, []);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    // let id = window.location.pathname.split('/post/')[1]
    
    return (
        <AppContext.Provider value={{posts}} >
        <div className='d-flex flex-column min-vh-100'>

        <div style={{padding: '0 1.5rem'}}>
            <div className='container'>
            <Header />
            </div>
        </div>

        <div className='container'>

          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<div style={{padding: '0 1.5rem'}}><h2>Логин</h2></div>} />
            <Route path='/post/:id' element={<Fullpost />} />
          </Routes>

        </div>

        <footer className='mt-auto'>
        <Navbar bg='light' expand="lg" style={{margin: '20px 0 0 0', padding: '0 1.5rem', height: '75px'}}>
            <div className='container'>
                <Navbar.Brand href="#home" style={{fontSize: '1.2rem'}}>REACT BLOG 2023</Navbar.Brand>
                <Navbar>
                    <Navbar.Text>by Alexey Sedov</Navbar.Text>
                </Navbar>
            </div>
        </Navbar>

        <div style={{textAlign: 'center', padding: '3px', backgroundColor: 'rgba(0, 0, 0, 0.02)' }}> 
             &copy; {new Date().getFullYear()} All right reserved:{' '}
            <a href="/">LEXXS</a>
        </div>
        </footer>
        

        {showButton && (
        <div onClick={scrollToTop} className="upclick">&#9650;</div>
        )}

        </div>
        </AppContext.Provider>
    )
}

export default App;
