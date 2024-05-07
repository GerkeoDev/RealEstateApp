import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Buscar.style.css';
import HousePic from '../../images/HousePic3.jpg'

const Buscar = () => {
    const navigate = useNavigate();
    const [searchData, setSearchData] = useState({
        city: "",
        availableFor: ""
    });
    const [validateErrors, setValidateErrors] = useState({});

    const validate = () => {
        let flag = true;
        let error = {};

        if (searchData.city.length == 0) {
            error.city = "Debe ingresar una ciudad";
            flag = false;
        }

        if (searchData.availableFor.length == 0) {
            error.availableFor = "Debe elegir una opción de búsqueda";
            flag = false;
        }

        setValidateErrors(error);
        console.log("Errores: ", error);
        return flag;
    }

    const handleCity = (event) => {
        setSearchData({
            ...searchData,
            city: event.target.value.toLowerCase()
        });
    }

    const handleAvailableFor = (event) => {
        setSearchData({
            ...searchData,
            availableFor: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Datos: ", searchData);
        
        if (!validate()){
            return
        }
    }

    return (
        <div className='bg-cover bg-no-repeat bg-center bg-fixed bg-opacity-90' style={{ backgroundImage: `url(${HousePic})` }}>
            <div className='bg-gray-800 bg-opacity-50 h-screen'>
                <div>
                    <Navbar
                        section='buscar'
                    />
                </div>
                <div className='w-100 mx-auto p-4'>
                    <div className='buscar-content'>
                        <h1 className='text-white'>Nosotros te<br/>podemos<br/>ayudar!</h1>
                    </div>
                    <div className='filter-box text-white bg-gray-800 bg-opacity-70'>
                        <form onSubmit={handleSubmit} className='h-full flex justify-around items-center'>
                            <div className='min-w-72 flex flex-col gap-y-4'>
                                <h1 className='text-lg font-bold'>Ubicación</h1>
                                <input type='text' name='city' placeholder='Ciudad' onChange={(event) => {handleCity(event)}}className='text-black w-52'></input>
                                {validateErrors.city && <p className='text-red-500 font-bold'>*{validateErrors.city}</p>}
                            </div>
                            <div className='min-w-72 flex flex-col gap-y-4'>
                                <h1 className='text-lg font-bold'>Disponibilidad</h1>
                                <select defaultValue="none" onChange={(event) => {handleAvailableFor(event)}} className='text-black w-52'>
                                    <option value="none" hidden>Elige uno</option>
                                    <option value="comprar">Comprar</option>
                                    <option value="alquilar">Alquilar</option>
                                </select>
                                {validateErrors.availableFor && <p className='text-red-500 font-bold'>*{validateErrors.availableFor}</p>}
                            </div>
                            <div>
                                <button type='submit' className="h-max bg-blue-600 hover:bg-blue-700 text-xl text-white font-bold py-4 px-6 mr-4 rounded">Buscar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buscar;