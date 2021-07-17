import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";

export default function App() {

    return (
        <Router>
            <div>
                <Link to={'/users'}>users page</Link>
                <br/>
                <Link to={'/posts'}>posts page</Link>
                <br/>
                <Link to={'/comments'}>comments page</Link>
                <br/>

                <Route path={'/users'} render={()=><Users/>}/>
                <Route path={'/posts'} render={() => <Posts/>}/>
                <Route path={'/comments'} component={Comments}/>


            </div>

        </Router>

    )

}