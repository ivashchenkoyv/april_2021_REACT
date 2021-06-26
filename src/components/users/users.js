import {useEffect, useState} from "react";

export default function Users(){


 let state= useState([]);
 let userList=state[0]
 let setUserList=state[1]



useEffect(()=> {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(response => {
            console.log(response)
            setUserList(response);
        })

},[])


    return(

        <div>
            {
                userList.map(value => <div>{value.id}-{value.name} </div>)
            }
        </div>
    )
}