import { useContext } from "react"
import LoginForm from "../components/LoginForm/LoginForm"
import RegisterForm from "../components/RegisterForm/RegisterForm"
import { Context } from "../PageRouter"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    return <div>
        <div>
            <div>
                <div>
                    <h1>My Account</h1>
                </div>
                { !user.length>0?
                    <div>
                        <RegisterForm />
                        <LoginForm />
                    </div>
                    : <div>
                        <h1>You are now logged in.</h1>
                        <button onClick={() => navigate("/home")}>
                            Go to home
                        </button>
                    </div>
                }
            </div>
        </div>
    </div>
}
export default LoginPage