import {useEffect, useState} from "react";

export default function Users(){

// let state=useState([])               //знизу записана спрощена аналогічна конструкція//
//     let usersList=state[0]
//     let setUsersList=state[1]

let [usersList,setUsersList]=useState([])


useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value=>value.json())
        .then(response=>{
            console.log(response);
            setUsersList(response)
        });


},[])


    return(
        <div>
            {usersList.map(value => <div> {value.userId}-{value.title}</div>)
                }
        </div>
    );


}