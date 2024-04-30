import {useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../PageRouter";

const PropertyCard = ({property}) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/${property.availableFor}/${property.title}`)
    }

    return(
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md flex flex-col mb-4">
            <div className="h-40 overflow-hidden">
                <img className="object-cover w-full h-full" src={property.images[0]} alt={property.title}/>
            </div>
            <div className="p-2">
                <h2 className="text-lg font-semibold mb-2">{property.title}</h2>
                <h2 className="font-semibold mb-2">{property.address}</h2>
            </div>
            <div className="flex p-2 justify-between items-center">
                <p className="text-blue-600">{property.price}$</p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded" onClick={handleClick}>Ver más</button>
            </div>
        </div>
    );
} 

export default PropertyCard;