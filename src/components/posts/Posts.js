import {useEffect, useState} from "react";

export default function Posts(){


    let [postsList, setPostlist]=useState([])

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(response=>{
                console.log(response)
                setPostlist(response)
            })
    },[])






    return(<div>

        {postsList.map(value=><div>{value.userId}-{value.title}</div>)}

    </div>)
}