import Navbar from '../../components/Navbar/Navbar';
import './Home.style.css';

const Home = () => {

    return (
        <div className='home-body'>
            <Navbar
                section='inicio'
            />
            <div className='home-content'>
                <h1>Explore<br/>las mejores<br/>opciones!</h1>
                <img src={require('../../images/HousePic1.jpg')} alt='Imagen de una casa para la página Inicio' width={1000}></img>
            </div>
        </div>
    );
}

export default Home;