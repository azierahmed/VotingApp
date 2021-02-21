
import { Link, Router,navigate } from "@reach/router"


export default props => {

    return(
        <div>
        <Link to="/admin/legislative/region/Jerusalem">Region</Link>   |  <Link to="/admin/legislative/party/Bashar">Party</Link>
        </div>
    )
}