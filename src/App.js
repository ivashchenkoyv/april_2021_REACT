import {BrowserRouter as Router, Link,Route} from 'react-router-dom'
import Users from "./components/users/Users";
import {getUsers} from './services/Api'

export default function App() {
    return (
        <Router>

            <div>
                <Link to={'/users'}>to users page</Link>
                <br/>
                <Link to={'/posts'}>to posts page</Link>
                <br/>
                <Link to={'/comments'}>to comments page</Link>

                <Route path={'/users'} render={()=><getUsers/>}/>
                <Route path={'/posts'} render={()=><div>{getUsers}</div>}/>
                <Route path={'/comments'} render={()=><div>comments page</div>}/>
            </div>
        </Router>
    );
}

// export default App;
