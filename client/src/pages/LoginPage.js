import { useContext } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { Context } from "../PageRouter";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const LoginPage = () => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="pt-16">
                <div className="flex flex-col justify-between">
                    <div className="mb-16 flex justify-center">
                        <h1 className="text-4xl">Mi Cuenta</h1>
                    </div>
                    { !user.length>0?
                        <div className="flex justify-around min-h-96">
                            <RegisterForm />
                            <LoginForm />
                        </div>
                        : <div>
                            <h1 className="text-3xl mb-4">You are now logged in.</h1>
                            <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/home")}>
                                Go to home
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default LoginPage;