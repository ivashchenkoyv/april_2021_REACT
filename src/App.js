import './App.css';
import Users from "./components/users/Users";
import {useEffect} from "react";
import {getUsers} from "./components/api/Api";
function App() {

    useEffect(()=>{
        getUsers().then(value => console.log(value));


    },[])




    return (
        <div>
            <Users/>

        </div>
    );
}

export default App;
