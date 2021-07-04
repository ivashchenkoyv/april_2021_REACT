import axios from 'axios'

let axiosInstance=axios.create({baseURL:'https://jsonplaceholder.typicode.com'});

const getPosts=()=>axiosInstance('/posts');
const getPostsOfUser=(userId)=>axiosInstance('/posts?userId='+userId)

export {getPosts,getPostsOfUser};