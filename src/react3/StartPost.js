import Posts from "./posts";
import User from "../Users/users";
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
function StartPost({item, search}) {
  return (
      <Router>
<div>
  <div><Link to={'user'}>User</Link></div>
  <div><Link to={'comments'}>Show all comments</Link></div>
  <Switch>
     <Route path={'/user'} render={(props)=>{return <User/>}}/>
    <Route path={'/comments'} render={(props)=>{return <Posts/>}}/>
  </Switch>
</div>
        </Router>
  );
}

export default StartPost;