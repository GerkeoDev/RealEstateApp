import { useContext, useEffect } from "react";
import { Context } from "../PageRouter";
import { useNavigate } from "react-router-dom";
import HTTPClient from "../utils/HTTPClient";
import Navbar from "../components/Navbar/Navbar";

const AccountPage = () => {
    const navigate = useNavigate();
    const {user, setUser} = useContext(Context);
    
    useEffect(() => {
        if(!user.logged){
            navigate("/login")
        }
    }, [])

    const handleLogout = (event) => {
        if(window.confirm('Are you sure you want to log out?')){
            const client = new HTTPClient();
            client.logout()
                .then(res => {})
                .catch(err => {
                    console.log(err)
                });
            setUser({});
            navigate("/home");
        }
    }

    return(
        <div>
            <Navbar />
            <div className="pt-16">
                <div className="w mx-auto flex flex-col justify-between">
                    <h1 className="text-4xl text-center mb-8">Mi cuenta</h1>
                    { user.logged && <div className="flex flex-col ">
                        <div className="text-xl mb-8 p-2 border">User name: {user.userName}</div>
                        <div className="text-xl mb-8 p-2 border">
                            <button className="w-20 bg-red-700 hover:bg-red-800 text-white font-bold py-2 rounded shadow-md" onClick={(event) => {handleLogout(event)}}>Log out</button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default AccountPage