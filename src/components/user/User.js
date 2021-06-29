import {useEffect, useState} from "react";

export default function User({item}){

let [getUser, getUsers]=useState([])

    useEffect(()=>{

fetch('https://jsonplaceholder.typicode.com/')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        getUsers(value)
    })

    // getUsers().then(value=>setUsers([...value.data]))
    })



    return(<div>
        {item.name}
    </div>)
}