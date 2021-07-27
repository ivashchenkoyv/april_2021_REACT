import {useEffect, useState} from "react";
import {getPosts} from "../../services/Api";
import Post from "./Post";
export default function Posts() {
    let [posts,setPosts]=useState([])
    useEffect(()=>{
        getPosts().then(value => setPosts(value.data))
    },[])


    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value}/>)}

        </div>
    );
}

