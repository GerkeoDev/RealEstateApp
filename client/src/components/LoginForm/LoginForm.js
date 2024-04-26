import { useContext, useState } from "react"
import {useNavigate} from "react-router-dom"
import HTTPClient from "../../utils/HTTPClient"
import { Context } from "../../PageRouter"

const LoginForm = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [errors, setErrors] = useState({})
    const {user, setUser} = useContext(Context)
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const validate = () => {
        let flag = true
        let errors = {}
        if(!data.password){
            errors.password = "Required password"
            flag = false
        }else if(data.password.length < 5){
            errors.password = "The password must be at least 5 characters long"
            flag = false
        }
        if(!data.email){
            errors.email = "Required email"
            flag = false
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)){
            errors.email = "Invalid email address"
            flag = false
        }
        
        setErrors(errors)
        return flag
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!validate()){
            console.log(errors)
            return
        }
        let client = new HTTPClient()

        client.login(data.email, data.password)
            .then(res => {
                const {id, userName} = res.data.user
                setUser({logged: true, id: id, userName: userName})
                
                console.log("Successful Login", user)
                navigate("/")
        })
            .catch(err => {
                if(err.response){
                    setErrors(err.response.data)
                }
                console.log(err)
            })
        setData({})
    }
    return <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            {errors.error && <small>{errors.error}*</small>}
            <div>
                <label htmlFor="email">Email </label>
                {errors.email && <small>{errors.email}*</small>}
                <input 
                    type="email" name="email" value={data.email || ""} onChange={handleChange} required={true} 
                />
            </div>
            <div>
                <label htmlFor="password">Password </label>
                {errors.password && <small>{errors.password}*</small>}
                <input 
                    type="password" name="password" value={data.password || ""} onChange={handleChange} required={true} minLength={5} 
                />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
}
export default LoginForm