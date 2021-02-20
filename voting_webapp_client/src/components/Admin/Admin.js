import {useEffect, useState} from "react";
import { Link, Router } from "@reach/router"
// import Chart from '../components/Chart';
import {Doughnut,Pie,Line,Bar} from 'react-chartjs-2';
import Presidential from './Presidential'
import Legislative from './Legislative'


export default props => {
    
    return(
        <div>
        <Link to="/admin/presidential">Presidential</Link>   |  <Link to="/admin/legislative/region/Jerusalem">Legislative</Link>
            <Router>
            <Presidential path="/admin/presidential"/>
            <Legislative path="/admin/legislative/region/:nt"/>
            </Router>
        </div>
    )

}