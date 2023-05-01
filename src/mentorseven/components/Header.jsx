import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {
    let {pathname} = useLocation();

    return (
        <div className='header'>
            <Navbar.Brand><Link to='/'><h2>React Blog</h2></Link></Navbar.Brand>
            <Nav variant="pills">
                <Nav.Link active={pathname === '/'} to="/" as={Link}>Главная</Nav.Link>
                <Nav.Link active={pathname === '/about'} to='/about' as={Link}>Обо мне</Nav.Link>
                <Nav.Link active={pathname === '/login'} to='/login' as={Link}>Войти</Nav.Link>
            </Nav>
        </div>
    );
}

export default Header;
