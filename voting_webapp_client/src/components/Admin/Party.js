import {useEffect, useState} from "react";
import { Link, Router,navigate } from "@reach/router"
// import Chart from '../components/Chart';
import {Doughnut,Pie,Line,Bar} from 'react-chartjs-2';
import Admin from "./Admin";
import Legislative from "./Legislative";

export default props => {
    const [lab,setlab]=useState("");
    const partyname=props.nt;
    var arr=[];
    for(var i=0;i<5;i++){
        var rand =(Math.random() * (1000));
        arr.push(rand)
    }
    var mail =25+(Math.random() * (100));


    var party=['Jerusalem','Nablus','Ramallah','Jenen']
    const [data,setdata]=useState({
        labels:party,
        datasets: [
            {
                label: partyname,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: arr
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
                label: partyname,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: arr
            }]})
            },[partyname])
    
    console.log(data.datasets[0].data)
    const town=()=>{
        const name=document.getElementById("Party")
        console.log(name.value+"tareq")
        navigate("/admin/legislative/party/"+name.value)
    }

    const partys=['bashar','ISIS','Nusra','FreeArmy','Russia']
    return(
        <div>
        <Admin/>
        <Legislative/>
        <div>
            <select onChange={town} id="Party" value={partyname} >
            {partys.map((party,index)=>{
                return(
                <>
                <option value={party} >{party}</option>
                </>
                )})}
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