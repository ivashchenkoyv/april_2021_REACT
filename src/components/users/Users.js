import {useEffect} from "react";
import {getUsers} from "../api/Api";

export default function Users() {

useEffect(getUsers()=>{

    })


    return (
        <div>
            Users
        </div>
    );
}