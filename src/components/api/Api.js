import axios from "axios";

//
// let options={aseURL:'https://jsonplaceholder.typicode.com/'
// }
let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

// const getUsers=()=>axiosInstance.get('/users');

const getUsers = () => {
    return axiosInstance.get('/users');
};

const getUser = (id) => {
    return axiosInstance.get('/users/' + id);
};


export {getUsers, getUser}