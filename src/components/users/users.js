import {useState} from "react";

export default function Users(){


 let state= useState([]);
 let userList=state[0]
 let setUserList=state[1]



// useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            console.log(value)
            setUserList(value);
        })




    return(

        <div>
            {userList.map(value => <div> dkjvnhtfjho</div>)}
        </div>
    )
}