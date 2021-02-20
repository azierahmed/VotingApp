import './App.css';
import Admin from "./components/Admin/Admin"
import { Link,navigate,Router } from "@reach/router"
import Presidential from './components/Admin/Presidential'
import Legislative from './components/Admin/Legislative'
import Region from "./components/Admin//Region"
import Party from "./components/Admin//Party"


function App() {

  return (
  <div className="App">
    <Link to="/admin/presidential">Admin</Link>
    <Router>
    <Presidential path="/admin/presidential"/>
    <Region path="/admin/legislative/region/:nt"/>
    <Party path="/admin/legislative/party/:nt"/>
    </Router>
    </div>
  );
}

export default App;
