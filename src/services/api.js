import axios from 'axios';
const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
const api = axios.create({
 baseURL: baseURL
});

/* AUTH Endpoints */
// Registrazione
export const registerUser = async (nome, cognome, username, password, role) => {
    
    const response = await api.post('/auth/register', {nome, cognome, username, password, role});
    return response.data;
};
 // Login
export const loginUser = async (nome, cognome, username, password, role) => {
    const response = await api.post('/auth/login', { nome, cognome, username, password, role });
    return response.data; 
   };

   // Imposta il token nell'header Authorization
   export const setAuthToken = (token) => {
    if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
    delete api.defaults.headers.common['Authorization'];
    }
   };
   
 export const createSfida = async (title, description, data) => {
    const response = await api.post('/sfide', {title, description, data});
    return response.data;
   };

export const getAllSfide = async () => {
    const response = await api.get('/sfide',);
    return response.data;
}

export const getSfidaById = async (id) => {
    const response = await api.get('/sfide', {id});
    return response.data;
};
export const updateSfida = async (id) => {
    const response = await api.put('/sfide', {id})
    return response.data;

}
export const deleteSfida = async (id) => {
    const response = await api.delete('/sfide', {id})
    return response.data;
}