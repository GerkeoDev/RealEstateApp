import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.style.css';
//Se puede añadir un botón de Login/Logout

const Navbar = ({section}) => {
    const [activeItem, setActiveItem] = useState(0);
    const navigate = useNavigate();

    const navbarItems = [
        {
            name: 'Inicio',
            to: '/home',
            section: 'inicio'
        },
        {
            name: 'Comprar',
            to: '/comprar',
            section: 'comprar'
        },
        {
            name: 'Alquilar',
            to: '/alquilar',
            section: 'alquilar'
        },
        {
            name: 'Buscar',
            to: '/buscar',
            section: 'buscar'
        }
    ]

    useEffect(() => {
        setActiveItem(navbarItems.findIndex((e) => e.section === section));
    }, [section])

    return(
        <div className='navbar-body'>
            <div className='navbar-title'>
                <h1 onClick={(event) => {navigate('/home')}}>RealEstateApp</h1>
            </div>
            <div className='navbar-items'>
                {navbarItems.map((item, index) =>
                    <span className={activeItem === index ? 'selected-tab' : ''} key={index} onClick={(event) => {navigate(item.to)}}><Link to={item.to}>{item.name}</Link></span>
                )}
            </div>
            <div className='navbar-login'>
                <h3>Login</h3>
            </div>
        </div>
    );
}

export default Navbar;