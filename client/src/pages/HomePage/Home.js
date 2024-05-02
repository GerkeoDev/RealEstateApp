import Navbar from '../../components/Navbar/Navbar';
import './Home.style.css';
import HousePic1 from '../../images/HousePic1.jpg';

const Home = () => {

    return (
        <div className='home-body'>
            <Navbar
                section='inicio'
            />
            <div className='home-content'>
                <h1>Explore<br/>las mejores<br/>opciones!</h1>
                <img src={HousePic1} alt='Imagen de una casa para la página Inicio'></img>
            </div>
        </div>
    );
}

export default Home;