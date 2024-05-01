import { useContext, useEffect } from "react";
import { Context } from "../PageRouter";
import HTTPClient from "../utils/HTTPClient";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const MyPublicationsPage = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
        if(user.logged){
            let client = new HTTPClient()

            client.getEstatesByOwner(user.id)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        }else{
            navigate("/home")
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
                    :
                    <div>
                        <h1>Mis publicaciones</h1>
                    </div>
                }
            </div>
            
        </div>
    )
}
export default MyPublicationsPage;