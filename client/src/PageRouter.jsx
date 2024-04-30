import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Home from './pages/HomePage/Home';
import Comprar from './pages/Comprar';
import Alquilar from './pages/Alquilar';
import Buscar from './pages/BuscarPage/Buscar';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import Detail from './pages/Detail';

export const Context = React.createContext()

const PageRouter = (props) => {
    const [user, setUser] = useLocalStorage('user', {})


    useEffect(()=> {
        
    }, [])

    return(
        <BrowserRouter>
            <Context.Provider value={{
                user: user,
                setUser: setUser
            }}>
                <Routes>
                    <Route index={true} path='/login' element={<LoginPage />}/>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/comprar' element={<Comprar />}/>
                    <Route path='/comprar/:property' element={<Detail />}/>
                    <Route path='/alquilar' element={<Alquilar />}/>
                    <Route path='/alquilar/:property' element={<Detail />}/>
                    <Route path='/buscar' element={<Buscar />}/>
                    <Route path='/cuenta' element={<AccountPage />}/>
                </Routes>
            </Context.Provider>
        </BrowserRouter>
    );
}

export default PageRouter;