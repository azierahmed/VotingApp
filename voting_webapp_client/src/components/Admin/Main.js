import { Link,navigate,Redirect ,Router } from "@reach/router"
import Presidential from './Presidential'
import Region from "./Region"
import Party from "./Party"
import Users from "./Users"


function App() {
    navigate("/admin/presidential")
    return (
    <div className="App">
    <Link to="/admin/presidential">Admin</Link>
    <Router>
        <Presidential path="/admin/presidential"/>
        <Region path="/admin/legislative/region/:nt"/>
        <Party path="/admin/legislative/party/:nt"/>
        <Users path="/admin/users"/>
    </Router>
    </div>
    );
}

export default App;
