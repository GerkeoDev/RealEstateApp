import { useContext, useEffect, useState } from "react";
import { Context } from "../PageRouter";
import HTTPClient from "../utils/HTTPClient";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import HousePic from '../images/HousePic3.jpg';

const MyPublicationsPage = () => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [publications, setPublications] = useState([]);
    const navigate = useNavigate();

    const deletePublication = id => {
        let client = new HTTPClient()

        client.deleteEstate(id)
            .then(res => setPublications(prevPublications => prevPublications.filter(pub => pub._id !== id)))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if(user.logged){
            let client = new HTTPClient()

            client.getEstatesByOwner(user.userName)
                .then(res => {
                    setPublications(res.data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }
    }, [])

    return (
        <div className='bg-cover bg-no-repeat bg-center bg-fixed bg-opacity-90'  style={{ backgroundImage: `url(${HousePic})` }}>
            <div className='bg-gray-800 bg-opacity-50 h-full'>
                <Navbar />
                <div>
                    {
                        !user.logged?
                        <div>
                            <h1 className="text-3xl">No has iniciado sesión</h1>
                        </div>
                        :loading?
                        <div>
                            <h1>Cargando...</h1>
                        </div>
                        :publications.length === 0?
                        <div className="pt-8">
                            <div className="w rounded h-screen mx-auto p-4 text-center">
                                <h1 className="text-4xl mb-8 text-center text-white">No tienes publicaciones</h1>
                                <div className="flex flex-col">
                                    <button className="mx-auto w-52 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/publicar")}>
                                    Publicar una Propiedad
                                    </button>
                                    <button className="mx-auto mt-2 w-52 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/home")}>
                                    Volver a Inicio
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                        :
                        <div className="pt-8 h-screen">
                            <div className="w rounded mx-auto flex flex-col justify-between bg-gray-800 bg-opacity-70 p-4">
                                <h1 className="text-4xl mb-8 text-center text-white">Mis Publicaciones</h1>
                                <div className=" flex flex-wrap justify-between mx-12">
                                    {publications.map((publication)=>
                                        <div key={publication._id} className="flex mb-4">
                                            <div className="w-full rounded-md shadow-md bg-gray-800 bg-opacity-70 p-4 flex min-w-96">
                                                <img 
                                                    className="h-40 w-40 rounded mr-8 object-cover hover:object-scale-down hover:cursor-pointer"
                                                    src={publication.image} alt={publication.title} 
                                                ></img>
                                                <div className="flex flex-col justify-between">
                                                    <div className="flex flex-col text-white">
                                                        <h1 className="text-2xl">{publication.title}</h1>
                                                        <p className="max-w-96">{publication.description}</p>
                                                    </div>
                                                    <div>
                                                        <button 
                                                            className="py-1 px-2 rounded shadow-md bg-sky-500 hover:bg-sky-600 mr-2"
                                                            onClick={()=>navigate(`/edit/${publication._id}`)}>Editar</button>
                                                        <button 
                                                            className="py-1 px-2 rounded shadow-md bg-red-600 hover:bg-red-700"
                                                            onClick={()=>{
                                                                if(window.confirm(`Seguro que quieres eliminar ${publication.title}?`)){
                                                                    deletePublication(publication._id)
                                                                }
                                                            }}>Eliminar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="text-right">
                                    <button className="w-20 mr-12 py-1 px-2 rounded shadow-md text-white bg-blue-500 hover:bg-blue-600" onClick={(e) => navigate("/publicar")}>Añadir</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default MyPublicationsPage;