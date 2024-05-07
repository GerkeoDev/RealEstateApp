import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import HousePic1 from '../../images/HousePic1.jpg';
import './Home.style.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='home-body bg-cover bg-no-repeat bg-center bg-fixed bg-opacity-90'  style={{ backgroundImage: `url(${HousePic1})` }}>
            <div className='bg-gray-800 bg-opacity-50 h-screen'>
                <Navbar
                    section='inicio'
                />
                <div className='home-content'>
                    <div>
                        <h1 className='text-white w-max'>Explore las mejores<br/>opciones!</h1>
                        {/* <img src={HousePic1} alt='Imagen de una casa para la página Inicio'></img> */}
                    </div>
                </div>
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
                            <h1>Publicar</h1>
                            <p>Mira las opciones disponibles para vender/alquilar una propiedad</p>
                            <button className='py-1 px-2 bg-gray-800 rounded transition duration-300 hover:bg-gray-900' onClick={() => {navigate('/publicar')}}>Publicar →</button>
                        </div>
                    </div>
        </div>
    );
}

export default Home;