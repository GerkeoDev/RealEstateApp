import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import HTTPClient from "../../utils/HTTPClient"
import "./RegisterForm.css"
import { Context } from "../../PageRouter"

const RegisterForm = () => {
    const {setUser} = useContext(Context)
    const [data, setData] = useState({})
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
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
        if (data.password && data.password2 && data.password !== data.password2){
            errors.password = "Passwords are not the same"
            flag = false;
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
        let client =  new HTTPClient()
        client.register(data)
            .then(res => {
                const {id, userName} = res.data.user
                setUser({logged: true, id: id, userName: userName})
                
                console.log("Successful registration")
                navigate("/")
            })
            .catch(err => {
                if(err.response){
                    setErrors(err.response.data.errors)
                }
                console.log(err)
            })
    }
    return <div className="custom-register-form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">User Name </label>
                {errors.userName && <small>{errors.userName}*</small>}
                <input
                    type="name" name="userName" value={data.userName || ""} onChange={handleChange} required={true} 
                />
            </div>
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
                <label htmlFor="password2">Confirm password </label>
                {errors.password2 && <small>{errors.password2}*</small>}
                <input
                    type="password" name="password2" value={data.password2 || ""} onChange={handleChange} required={true} minLength={5} 
                />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
}
export default RegisterForm