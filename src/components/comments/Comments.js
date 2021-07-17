import {useEffect, useState} from "react";
import {getComments} from "../../services/Api";

export default function Comments() {
    let [comments,setComments]=useState([])
    useEffect(()=>{
        getComments().then(value => setComments(value.data))
    },[])


    return (
        <div>
            {JSON.stringify(comments)}

        </div>
    );
}

