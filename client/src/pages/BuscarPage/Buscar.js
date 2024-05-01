import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './Buscar.style.css';

const Buscar = () => {
    const navigate = useNavigate();

    return (
        <div className='buscar-body'>
            <div>
                <Navbar
                    section='buscar'
                />
            </div>
            <div className='buscar-content'>
                <img src={require('../../images/HousePic2.jpg')} alt='Imagen de una casa para la página Inicio'></img>
                <h1>Nosotros te<br/>podemos<br/>ayudar!</h1>
            </div>
            <div className='buscar-box'>
                <div className='buscar-one-box'>
                    <h1>Comprar</h1>
                    <p>Buscas comprar una casa o departamento?<br/>Mira las opciones disponibles para comprar</p>
                    <button onClick={(event) => {navigate('/comprar')}}>Comprar →</button>
                </div>
                <div className='buscar-one-box'>
                    <h1>Alquilar</h1>
                    <p>Buscas alquilar una casa o departamento?<br/>Mira las opciones disponibles para alquilar</p>
                    <button onClick={(event) => {navigate('/alquilar')}}>Alquilar →</button>
                </div>
                <div className='buscar-one-box'>
                    <h1>Vender</h1>
                    <p>Mira las opciones disponibles para vender/alquilar una propiedad</p>
                    <button onClick={() => {navigate('/publicar')}}>Vender →</button>
                </div>
            </div>
        </div>
    )
}

export default Buscar;