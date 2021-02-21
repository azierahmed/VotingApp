import {useEffect, useState} from "react";
import { Link, Router,navigate } from "@reach/router"
// import Chart from '../components/Chart';
import {Doughnut,Pie,Line,Bar} from 'react-chartjs-2';
import Admin from "./Admin";
import Region from "./Region"
import Party from "./Party"

export default props => {

    return(
        <div>
        <Link to="/admin/users">Users</Link> | <Link to="/admin/legislative/region/Jerusalem">Region</Link>   |  <Link to="/admin/legislative/party/Bashar">Party</Link>
        </div>
    )
}