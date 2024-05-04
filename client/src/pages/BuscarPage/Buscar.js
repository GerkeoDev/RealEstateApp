import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './Buscar.style.css';
import HousePic from '../../images/HousePic3.jpg'

const Buscar = () => {
    const navigate = useNavigate();

    return (
        <div className='buscar-body bg-cover bg-no-repeat bg-center bg-fixed bg-opacity-90'  style={{ backgroundImage: `url(${HousePic})` }}>
            <div className='bg-gray-800 bg-opacity-50 h-full'>
                <div>
                    <Navbar
                        section='buscar'
                    />
                </div>
                <div className='w mx-auto p-4'>
                    <div className='buscar-content'>
                        <h1 className='text-white'>Nosotros te<br/>podemos<br/>ayudar!</h1>
                    </div>
                    <div className='buscar-box text-white bg-gray-800 bg-opacity-70'>
                        <div className='buscar-one-box'>
                            <h1>Comprar</h1>
                            <p>Buscas comprar una casa o departamento?<br/>Mira las opciones disponibles para comprar</p>
                            <button className='py-1 px-2 bg-gray-800 rounded transition duration-300 hover:bg-gray-900' onClick={(event) => {navigate('/comprar')}}>Comprar →</button>
                        </div>
                        <div className='buscar-one-box'>
                            <h1>Alquilar</h1>
                            <p>Buscas alquilar una casa o departamento?<br/>Mira las opciones disponibles para alquilar</p>
                            <button className='py-1 px-2 bg-gray-800 rounded transition duration-300 hover:bg-gray-900' onClick={(event) => {navigate('/alquilar')}}>Alquilar →</button>
                        </div>
                        <div className='buscar-one-box'>
                            <h1>Vender</h1>
                            <p>Mira las opciones disponibles para vender/alquilar una propiedad</p>
                            <button className='py-1 px-2 bg-gray-800 rounded transition duration-300 hover:bg-gray-900' onClick={() => {navigate('/publicar')}}>Vender →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buscar;