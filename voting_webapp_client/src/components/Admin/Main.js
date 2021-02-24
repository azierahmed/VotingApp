import { navigate,Router } from "@reach/router"
import Presidential from './Presidential'
import Region from "./Region"
import Party from "./Party"
import Users from "./Users"
import Cookies from 'universal-cookie';



function Main() {
    const cookies = new Cookies();
    return (
    <>
    <Router>
        <Presidential path="/presidential"/>
        <Region path="/legislative/region/:nt"/>
        <Party path="/legislative/party/:nt"/>
        <Users path="/users"/>
    </Router>
    </>
    );
    
}

export default Main;