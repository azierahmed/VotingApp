import {useEffect, useState} from "react";
import { Link, Router } from "@reach/router"
// import Chart from '../components/Chart';
import {Doughnut,Pie,Line,Bar} from 'react-chartjs-2';
import Admin from "./Admin";

export default props => {
    const [lab,setlab]=useState("");
    const [data,setdata]=useState({
        labels:['Tareq', 'Ammar', 'Ahmad', 'Amr'],
        datasets: [
            {
            label: 'this a Test',
            fill: false,
            lineTension: 0.3,
            backgroundColor: ['rgba(0,255,255,1)','rgba(255,0,255,0)','rgba(255,255,0,1)','rgba(192,192,192,1)'],
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [4527, 1578, 3009, 105]
            }
        ]
    });
    
    const [pdata,setpdata]=useState({
        labels:['Tareq', 'Ammar', 'Ahmad', 'Amr'],
        datasets: [
            {
            label: 'this a Test',
            fill: false,
            lineTension: 0.3,
            backgroundColor: ['rgba(0,192,192,0.4)','rgba(255,192,192,0.4)','rgba(75,192,0,0.4)','rgba(75,0,192,0.4)'],
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [4527, 1578, 3009, 105]
            }
        ]
    });
    console.log(data.datasets[0].data)

    return(
        <div>
        <Admin/>
            <div style={{display:"flex"}}>
                <div style={{display:"block",width:600,height:400,marginRight:100,marginLeft:50}}>
                    <Pie data={data}/>
                    
                </div>
                <div style={{display:"block",width:600,height:400}}>
                    <Bar data={pdata}/>
                    
                </div>
            </div>
        </div>
    )

}