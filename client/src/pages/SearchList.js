import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HTTPClient from "../utils/HTTPClient";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import Navbar from '../components/Navbar/Navbar';
import HousePic from '../images/HousePic3.jpg';

const SearchDetail = () => {
    const {availableFor, city} = useParams();
    const [results, setResults] = useState(0);
    const [properties, setProperties] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        let client = new HTTPClient()
        client.getEstateByCityAndAvailableFor(city, availableFor)
            .then(res => {
                console.log(res.data)
                setProperties(res.data)
                setResults(res.data.length)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [city, availableFor])

    return(
        <div className='bg-cover bg-no-repeat bg-center bg-fixed bg-opacity-90' style={{ backgroundImage: `url(${HousePic})` }}>
            <div className='bg-gray-800 bg-opacity-50 h-full'>
                <div>
                    <Navbar
                        section='buscar'
                    />
                </div>
                <div className="mt-4 h-screen">
                    <div className="w rounded mx-auto flex flex-col bg-gray-800 bg-opacity-70 p-4">
                        <p className='text-white'>Búsqueda en {city.replace("-", " ").toUpperCase()} para {availableFor == "sale" ? "COMPRAR" : "ALQUILAR"}</p>
                        <p className="text-xl text-white">Showing all {results} results</p>
                        <div className="flex flex-wrap">
                            {loaded && properties.map((property, idx) => {
                                return <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                                            <PropertyCard property={property} />
                                        </div>
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchDetail;