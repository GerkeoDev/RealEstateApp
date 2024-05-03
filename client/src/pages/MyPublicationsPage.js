import { useContext, useEffect, useState } from "react";
import { Context } from "../PageRouter";
import HTTPClient from "../utils/HTTPClient";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const MyPublicationsPage = () => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [publications, setPublications] = useState([])
    const navigate = useNavigate()
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
        <div>
            <Navbar />
            <div>
                {
                    !user.logged?
                    <div>
                        <h1 className="text-3xl">No estas logueado</h1>
                    </div>
                    :loading?
                    <div>
                        <h1>Cargando...</h1>
                    </div>
                    :publications.length === 0?
                    <div>
                        <h1>No tienes publicaciones</h1>
                    </div>
                    :
                    <div>
                        <h1 className="text-4xl mb-8">Mis publicaciones</h1>
                        <div>
                            {publications.map((publication, index)=>
                                <div key={index} className="flex mb-4">
                                    <div className="border rounded-md shadow-md p-4 flex">
                                        <img 
                                            className="h-40 w-40 rounded"
                                            src={publication.image} alt={publication.title} 
                                        ></img>
                                        <div>
                                            <h1 className="text-2xl">{publication.title}</h1>
                                            <p>{publication.description}</p>
                                            <div>
                                                <button 
                                                    className="py-1 px-2 rounded shadow-md border bg-sky-500 hover:bg-sky-600 mr-2"
                                                    onClick={()=>navigate(`/edit/${publication.title}`)}>Editar</button>
                                                <button 
                                                    className="py-1 px-2 rounded shadow-md border bg-red-600 hover:bg-red-700"
                                                    onClick={()=>{
                                                        if(window.confirm(`Seguro que quieres eliminar ${publication.title}?`)){
                                                            console.log("Eliminado", publication.title)
                                                        }
                                                    }}>Eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                }
            </div>
            
        </div>
    )
}
export default MyPublicationsPage;