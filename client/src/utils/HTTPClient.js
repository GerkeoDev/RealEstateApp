import axios from "axios"

class HTTPClient {
    constructor(){
        this.instance = axios.create({
            baseURL: "http://localhost:8000/api/",
            withCredentials: true,
        })
    }

    login(email, password){
        return this.instance.post("/login", {
            email,
            password
        })
    }

    register(data){
        return this.instance.post("/register", data)
    }

    logout(){
        return this.instance.post("/logout")
    }

    // getEstates(){
    //     return this.instance.get("/estates/")
    // }

    getEstatesByAvailableFor(availableFor){
        return this.instance.get(`/estates/${availableFor}`)
    }
    
}

export default HTTPClient