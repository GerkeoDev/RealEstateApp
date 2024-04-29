import Navbar from '../../components/Navbar/Navbar';
import './Buscar.style.css';

const Buscar = () => {
    
    return (
        <div>
            <div>
                <Navbar
                    section='buscar'
                />
            </div>
            <div className='buscar-content'>
                <img src={require('../../images/HousePic2.jpg')} alt='Imagen de una casa para la página Inicio' width={1000}></img>
                <h1>Nosotros te<br/>podemos<br/>ayudar!</h1>
            </div>
        </div>
    )
}

export default Buscar;