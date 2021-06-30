import axios from "axios";

//
// let options={aseURL:'https://jsonplaceholder.typicode.com/'
// }
let axiosInstance=axios.create({aseURL:'https://jsonplaceholder.typicode.com/'});

// const getUsers=()=>axiosInstance.get('/users');

const getUsers=()=>{
    return axiosInstance.get('/users');
};

const getUser=(id)=>{
    return axiosInstance.get('/users'+id);
};
const getPosts=()=>{
    return axiosInstance.get('/posts');
};



console.log(getUser())
console.log(getUsers())
console.log(getPosts())
export {getUsers,getUser,getPosts}