import {useEffect, useState} from "react";
import {getUsers} from "../../services/Api";
export default function Users() {

 let [users,usersList]

useEffect(()=>{getUsers().then(value => usersList(value.data))
console.log(getUsers())


},[]);

    return (
        <div>
            <Users items={users} />

        </div>
    );
}