import Navbar from '../../components/Navbar/Navbar';
import './Home.style.css';
import HousePic1 from '../../images/HousePic1.jpg';

const Home = () => {

    return (
        <div className='home-body bg-cover bg-no-repeat bg-center bg-fixed bg-opacity-90'  style={{ backgroundImage: `url(${HousePic1})` }}>
            <div className='bg-gray-800 bg-opacity-50 h-full'>
                <Navbar
                    section='inicio'
                />
                <div className='home-content'>
                    <div className=''>
                        <h1 className='text-white '>Explore las mejores opciones!</h1>
                        {/* <img src={HousePic1} alt='Imagen de una casa para la página Inicio'></img> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;