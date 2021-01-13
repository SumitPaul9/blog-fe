import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:2000/api";

export const getPosts = async() =>{
     return await axios.get(API_URL + "/posts/", { headers: authHeader()});
    
}

export const updatePost = (id, post) =>{
     return axios.patch(API_URL + `/posts/update/${id}`, {
        post
    }, { headers: authHeader()});
}

export const deletePost = (id) =>{
     axios.delete(API_URL + `/posts/delete/${id}`, { headers: authHeader() });
}

export const createPost = async(title, body, author) =>{
     await axios.post(API_URL + "/posts/create/", { title, body, author }, { headers: authHeader() });
}

export const getPostByID = async(id) =>{
     return await axios.get(API_URL + `/posts/post/${id}`, { headers: authHeader() });
}
