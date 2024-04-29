import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Home from './pages/Home';
import Comprar from './pages/Comprar';
import Alquilar from './pages/Alquilar';
import Buscar from './pages/Buscar';
import LoginPage from './pages/LoginPage';

export const Context = React.createContext()

const PageRouter = (props) => {
    const [user, setUser] = useLocalStorage('example', {})


    useEffect(()=> {
        
    }, [])
    return <BrowserRouter>
            <Context.Provider value={{
                user: user,
                setUser: setUser
            }}>
                <Routes>
                    <Route index={true} path='/login' element={<LoginPage />}/>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/comprar' element={<Comprar />}/>
                    <Route path='/alquilar' element={<Alquilar />}/>
                    <Route path='/buscar' element={<Buscar />}/>
                </Routes>
            </Context.Provider>
        </BrowserRouter>
}
export default PageRouter