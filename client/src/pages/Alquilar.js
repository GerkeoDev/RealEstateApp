import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import PropertyList from '../components/PropertyList/PropertyList';

const Alquilar = () => {
    const [results, setResults] = useState(0)
    return (
        <div>
            <div>
                <Navbar
                    section='alquilar'
                />
            </div>
            <div className="">
                <div className="w mx-auto flex flex-col justify-between">
                    <p>Home/Alquilar</p>
                    <p className="text-xl">Showing all {results} results</p>
                    <PropertyList availableFor="rent" results={setResults}/>
                </div>
            </div>
        </div>
    )
}

export default Alquilar;