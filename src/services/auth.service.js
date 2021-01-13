import axios from 'axios';

const API_URL = "http://localhost:2000/api";

export const signupService = async(username, email, password) =>{
    await axios.post(API_URL + "signup", {
        username, email, password
    })
}

export const loginService = async (email, password) =>{
    const result = await axios.post(API_URL + "/login", {
        email,
        password
    })
    if(result.data.accessToken){
        localStorage.setItem("user", JSON.stringify(result.data));
    }

    return result.data;
}

export const logoutService = async () => {
   await localStorage.removeItem("user");
}