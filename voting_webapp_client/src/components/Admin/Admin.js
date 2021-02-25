
import { Link, Router } from "@reach/router"
import Presidential from './Presidential'
import Legislative from './Legislative'
import Users from './Users'
import {setDropdownOpen,dropdownOpen,Nav,Dropdown} from 'react'
import {NavLink,NavItem,DropdownItem,DropdownToggle,toggle,DropdownMenu} from 'reactstrap'

export default props => {
    const toggle = () => setDropdownOpen(!dropdownOpen);
    
    return(
        <div>
        {/* <Link to="/admin/presidential">Presidential</Link>   |  <Link to="/admin/legislative/region/Jerusalem">Legislative</Link> | <Link to="/admin/users">Users</Link> */}
            <Router>
            <Presidential path="/admin/presidential"/>
            <Legislative path="/admin/legislative/region/:nt"/>
            <Users path="/admin/users"/>
            </Router>
        </div>
    )

}