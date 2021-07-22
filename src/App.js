
import './App.css';
import {useEffect, useState} from "react";
import {getPosts, getPostsOfUser} from "./services/Api";
import Posts from "./components/posts/Posts";


export default function App() {

  let [post,setPost]=useState();
  console.log(post);
  let appFn=(userId)=>{
    getPostsOfUser(userId).then(value => setPost(value.data));
  };


  let [posts,setPosts]=useState([])

  useEffect(()=>{

    getPosts().then(value => setPosts(value.data));
  },[])


  return (
    <div >
    <Posts items={posts} appFn={appFn}/>

      {post && post.map(value => <div key={value.id}>
      <h2>{value.userId}. {value.title}</h2>
      <p>{value.body}</p>
    </div>)}
      
    </div>
  );
}


