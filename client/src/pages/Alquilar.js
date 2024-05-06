import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import PropertyList from '../components/PropertyList/PropertyList';
import HousePic from '../images/HousePic3.jpg'

const Alquilar = () => {
    const [results, setResults] = useState(0)
    return (
        <div className='bg-cover bg-no-repeat bg-center bg-fixed bg-opacity-90'  style={{ backgroundImage: `url(${HousePic})` }}>
            <div className='bg-gray-800 bg-opacity-50 h-full'>
                <div>
                    <Navbar
                        section='alquilar'
                    />
                </div>
                <div className="mt-4">
                    <div className="w rounded mx-auto flex flex-col bg-gray-800 bg-opacity-70 p-4">
                        <p className='text-white'>Inicio/Alquilar</p>
                        <p className="text-xl text-white">Showing all {results} results</p>
                        <PropertyList availableFor="rent" results={setResults}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alquilar;