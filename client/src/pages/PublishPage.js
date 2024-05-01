import { useContext, useEffect, useState } from "react"
import MapLocation from "../components/MapLocation/MapLocation"
import Navbar from "../components/Navbar/Navbar"
import { Context } from "../PageRouter"
import { useNavigate } from "react-router-dom"

const PublishPage = () => {
    const {user, latLng} = useContext(Context);
    const [publicationData, setPublicationData] = useState({
        title: "",
        city: "",
        neighborhood: "",
        description: "",
        owner: user.userName,
        address: "",
        coordinates: latLng,
        price: 5000,
        images: [],
        bedrooms: 0,
        bathrooms: 0,
        rooms: 1,
        availableFor: "sale"
    });
    const navigate = useNavigate();
    const handleChangeAvailableFor = e => {
        setPublicationData({
            ...publicationData,
            availableFor: e.target.value
        });
    }
    const handleChange = e => {
        setPublicationData({
            ...publicationData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(!user.logged){
            navigate('/login');
        }else{
            console.log(publicationData);
            // navigate('/mis-publicaciones');
        }
    }
    useEffect(() => {
        setPublicationData({
            ...publicationData,
            coordinates: latLng
        })
    },[latLng])
    return (
        <div>
            <Navbar />
            <div className="pt-16 flex justify-center">
                <form className="flex" onSubmit={handleSubmit}>
                    <div className="border rounded flex flex-col justify-start shadow-md mr-8 p-8">
                        <h1 className="text-3xl text-center mb-4" onClick={()=>console.log(publicationData)}>Detalles Generales</h1>
                        <div>
                            <tr>
                                <td>Título:</td> 
                                <td className="pl-2 py-2">
                                    <input  
                                            className="border border-gray-300 rounded-md py-1 px-1 focus:outline-none focus:border-blue-500 w-full"
                                            type="text" name="title" id="title" placeholder="Título" required={true}
                                            value={publicationData.title} onChange={handleChange}/>
                                </td> 
                            </tr>
                            <tr>
                                <td>Ciudad:</td> 
                                <td className="pl-2 pb-2">
                                    <input  
                                            className="border border-gray-300 rounded-md py-1 px-1 focus:outline-none focus:border-blue-500 w-full"
                                            type="text" name="city" id="city" placeholder="Ciudad" required={true}
                                            value={publicationData.city} onChange={handleChange}/>
                                </td> 
                            </tr>
                            <tr>
                                <td>Barrio:</td> 
                                <td className="pl-2 pb-2">
                                    <input  
                                            className="border border-gray-300 rounded-md py-1 px-1 focus:outline-none focus:border-blue-500 w-full"
                                            type="text" name="neighborhood" id="neighborhood" placeholder="Barrio" required={true}
                                            value={publicationData.neighborhood} onChange={handleChange}/>
                                </td> 
                            </tr>
                            <tr>
                                <td>Dirección:</td> 
                                <td className="pl-2 pb-2">
                                    <input  
                                            className="border border-gray-300 rounded-md py-1 px-1 focus:outline-none focus:border-blue-500 w-full"
                                            type="text" name="address" id="address" placeholder="Calle/Dirección" required={true}
                                            value={publicationData.address} onChange={handleChange}/>
                                </td> 
                            </tr>
                            <tr>
                                <td>Descripción:</td> 
                                <td className="pl-2">
                                    <textarea  
                                            className="border border-gray-300 rounded-md py-1 px-1 focus:outline-none focus:border-blue-500 w-full h-32"
                                            type="text" name="description" id="description" placeholder="Breve descripción" required={true}
                                            value={publicationData.description} onChange={handleChange}/>
                                </td> 
                            </tr>
                        </div>
                    </div>
                    <div className="border rounded flex flex-col shadow-md p-8">
                        <h1 className="text-3xl text-center mb-4">Detalles de la Propiedad</h1>
                        <div className="flex">
                            <div>
                                <p>Ubicación:</p>
                                <div className="mr-2 mb-2">
                                    <MapLocation />
                                </div>
                            </div>
                            <div>
                                <tr>
                                    <td>Habitaciones:</td> 
                                    <td className="py-2 pl-2">
                                        <input 
                                            className="border border-gray-300 rounded-md py-1 px-1 focus:outline-none focus:border-blue-500 w-full"
                                            type="number" name="rooms" id="rooms" required={true} min={1}
                                            value={publicationData.rooms} onChange={handleChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dormitorios:</td> 
                                    <td className="pb-2 pl-2">
                                        <input 
                                            className="border border-gray-300 rounded-md py-1 px-1 focus:outline-none focus:border-blue-500 w-full"
                                            type="number" name="bedrooms" id="bedrooms" required={true}
                                            value={publicationData.bedrooms} onChange={handleChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Baños:</td> 
                                    <td className="pb-2 pl-2">
                                        <input
                                            className="border border-gray-300 rounded-md py-1 px-1 focus:outline-none focus:border-blue-500 w-full"
                                            type="number" name="bathrooms" id="bathrooms" required={true}
                                            value={publicationData.bathrooms} onChange={handleChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Imagen:</td> 
                                    <td className="pl-2">
                                        <input 
                                            className="border border-gray-300 rounded-md py-1 px-1 focus:outline-none focus:border-blue-500 w-full"
                                            type="text" name="images" id="images" required={true} />
                                    </td>
                                </tr>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <tr>
                                    <td>Disponibilidad:</td> 
                                    <td className="pb-2 pl-2">
                                        <select 
                                            onChange={handleChangeAvailableFor} 
                                            className="border border-gray-300 rounded-md py-1 px-1 focus:outline-none focus:border-blue-500"
                                            value={publicationData.availableFor}
                                        >
                                            <option value="sale">Vender</option>
                                            <option value="rent">Alquilar</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Precio:</td> 
                                    <td className="pl-2">
                                        <input 
                                            className="border border-gray-300 rounded-md py-1 px-1 focus:outline-none focus:border-blue-500 w-full"
                                            type="number" name="price" id="price" required={true} min={5000}
                                            value={publicationData.price} onChange={handleChange}/>
                                    </td>
                                </tr>
                            </div>
                            <div className="flex flex-col justify-end">
                                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">Publicar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PublishPage