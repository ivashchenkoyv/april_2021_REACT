
import './App.css';
import {useEffect, useState} from "react";
import {getPosts, getPostsOfUser} from "./services/Api";
import Posts from "./components/posts/Posts";


export default function App() {

  let [post,setPost]=useState();
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

      <hr/>{post && <div>{JSON.stringify(post)}</div>}<hr/>
      
    </div>
  );
}


