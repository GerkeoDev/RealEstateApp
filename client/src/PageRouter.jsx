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
import PublishPage from './pages/PublishPage';
import MyPublicationsPage from './pages/MyPublicationsPage';
import EditPage from './pages/EditPage';

export const Context = React.createContext()

const PageRouter = (props) => {
    const [user, setUser] = useLocalStorage('user', {})
    const [latLng, setLatLng] = useLocalStorage('latLng', { lat: -25.28646, lng: -57.647 })

    useEffect(()=> {
        console.log(latLng)
    }, [])

    return(
        <BrowserRouter>
            <Context.Provider value={{
                user: user,
                setUser: setUser,
                latLng: latLng,
                setLatLng: setLatLng
            }}>
                <Routes>
                    <Route index={true} path='/login' element={<LoginPage />}/>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/comprar' element={<Comprar />}/>
                    <Route path='/comprar/:id' element={<Detail />}/>
                    <Route path='/alquilar' element={<Alquilar />}/>
                    <Route path='/alquilar/:id' element={<Detail />}/>
                    <Route path='/buscar' element={<Buscar />}/>
                    <Route path='/cuenta' element={<AccountPage />}/>
                    <Route path='/publicar' element={<PublishPage />}/>
                    <Route path='/mis-publicaciones' element={<MyPublicationsPage />}/>
                    <Route path='/edit/:id' element={<EditPage />}/>
                </Routes>
            </Context.Provider>
        </BrowserRouter>
    );
}

export default PageRouter;