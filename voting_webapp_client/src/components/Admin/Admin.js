
import { Link, Router } from "@reach/router"
// import Chart from '../components/Chart';
import Presidential from './Presidential'
import Legislative from './Legislative'
import Users from './Users'

export default props => {
    
    return(
        <div>
        <Link to="/admin/presidential">Presidential</Link>   |  <Link to="/admin/legislative/region/Jerusalem">Legislative</Link> | <Link to="/admin/users">Users</Link>
            <Router>
            <Presidential path="/admin/presidential"/>
            <Legislative path="/admin/legislative/region/:nt"/>
            <Users path="/admin/users"/>
            </Router>
        </div>
    )

}