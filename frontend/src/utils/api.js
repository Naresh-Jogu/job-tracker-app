const API_URL = "http://localhost:3000/api"

export const loginAPI = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, 
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({email, password})
        }
    )

    return response.json()

}

export const signupAPI = async(name, email, password) =>{
    const response = await fetch(`${API_URL}/auth/register`, 
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, email, password})
        }
    )

     return response.json()
}

