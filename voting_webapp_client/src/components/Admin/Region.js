import {useEffect, useState} from "react";
import { Link, Router,navigate } from "@reach/router"
import {Doughnut,Pie,Line,Bar} from 'react-chartjs-2';
import Admin from "./Admin";
import Legislative from "./Legislative";

export default props => {
    const [lab,setlab]=useState("");
    const townname=props.nt;
    var arr=[];
    for(var i=0;i<5;i++){
        var rand =(Math.random() * (1000));
        arr.push(rand)
    }
    var mail =25+(Math.random() * (100));


    var party=['Bshar','ISIS','Nusra','FreeArmy','Russia']
    const [data,setdata]=useState({
        labels:party,
        datasets: [
            {
                label: townname,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,0.4)',
                data:arr
              }
        ]
    });

    const [gender,setgender]=useState({
        labels: ['mail','femail'],
        datasets: [{
            data: [mail, 100-mail],
            backgroundColor: [
            '#36A2EB',
            '#FF6384',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#36A2EB',
            '#FF6384',
            ]
        }]
    });
    
    useEffect(()=>{
        setgender(
            {labels:['mail','femail'],
            datasets:[{
                data: [mail, 100-mail],
                backgroundColor: [
                '#36A2EB',
                '#FF6384',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#36A2EB',
                    '#FF6384',
                ]   
            }]});
        
        setdata({
        labels:party,
        datasets: [
            {
                label: townname,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,0.4)',
                data:arr
            }]})
            },[townname])
    

    
    console.log(data.datasets[0].data)
    const town=()=>{
        const name=document.getElementById("Town")
        console.log(name.value+"tareq")
        navigate("/admin/legislative/region/"+name.value)
    }

    return(
        <div>
        <Admin/>
        <Legislative/>
        <div>
            <select onChange={town} id="Town" value={townname} >
                <option value='Jerusalem' >Jerusalem</option>
                <option value='Ramallah' >Ramallah</option>
                <option value='Nablus' >Nablus</option>
                <option value='Jenen' >Jenen</option>
            </select>
        </div>
            <div style={{display:"flex"}}>
                <div style={{display:"block",width:600,height:400,marginRight:100,marginLeft:50}}>
                    <Bar data={data}/>
                    
                </div>
                <div style={{display:"block",width:600,height:400}}>
                    <Pie data={gender}/>
                    
                </div>
            </div>
        </div>
    )

}