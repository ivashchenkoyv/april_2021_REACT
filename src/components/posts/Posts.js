import {useEffect, useState} from "react";
import {getPosts} from "../../services/Api";

export default function Posts() {
    let [posts,setPosts]=useState([])
    useEffect(()=>{
        getPosts().then(value => setPosts(value.data))
    },[])


    return (
        <div>
            {JSON.stringify(posts)}

        </div>
    );
}

