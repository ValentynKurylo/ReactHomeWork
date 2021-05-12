import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom'

function Inventory(props){
    let {item} = props
    return (<div>
        {item.id} --- {item.title} --- <Link to={'/inventory/'+item.id}>details</Link>

    </div>)
}
export default Inventory