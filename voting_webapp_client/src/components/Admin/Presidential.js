import {useState,useEffect} from "react";
import {Radar,Pie,Bar} from 'react-chartjs-2';
import Admin from "./Admin";
import axios from "axios";

export default props => {
    const [lab,setlab]=useState("");
    const [data,setdata]=useState({
    labels:['Tareq'],
	datasets: [{
		data: [4527],
		backgroundColor: ['rgba(255,0,0,0.4)','rgba(0,0,255,0.4)','rgba(255,0,255,0.4)','rgba(0,0,0,.4)'],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]});
    var arr=[];

    const [cands,setcands]=useState([]);
    const [loaded,setloaded]=useState(false);
    const [votes,setvotes]=useState();
    useEffect(() => {
    axios.get("http://localhost:8000/api/presidents")
            .then(response => setcands(response.data))
            .then(()=>{
                console.log(presidents)
                cands.map((name)=>{
                    axios.get("http://localhost:8000/api/official/pres/candidate/"+name)
                    .then(response=>votes.add(response.data.length))
                    .catch(err=> console.log("There was an issue: ", err))
                })}
            )
            .catch(error => console.log("There was an issue: ", error))
    }, [data])
    
    
    console.log(cands)
    const presidents=[]
    if(cands!=null)(
    cands.map((cand, index) => presidents.push(cand.candidateName))
    )
    console.log(presidents)
    const test=[]
    presidents.map((president)=>
    axios.get("http://localhost:8000/api/official/pres/candidate/"+president)
    .then(response=>test.push(response.data.length))
    .catch(err=> console.log("There was an issue: ", err))
    )
    console.log("this is test :",test)


    for(var j=0;j<4;j++){var arr2=[];
        for(var i=0;i<4;i++){
        var rand =(Math.random()*(1000));
        arr2.push(rand)
        }
        arr.push(arr2)
    }



    const [bardata,setpbardata]=useState({
        labels:presidents,
        datasets: [
            {
            label: 'My First dataset',
            backgroundColor: ['rgba(255,255,0,0.3)','rgba(0,255,255,.3)','rgba(255,0,255,0.3)','rgba(255,99,132,0.2)'],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: test
            }
        ]
    });

//radar
    const data1 = {
        labels:['Jerusalem','Nablus','Ramallah','Jenen'],
        datasets: [
            {
            label: 'Tareq',
            backgroundColor: 'rgba(255,255,0,0.3)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(255,255,0,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: arr[1]
            },
        ]
    };
    const data2= {
        labels:['Jerusalem','Nablus','Ramallah','Jenen'],
        datasets: [
            
            {
            label: 'Ammar',
            backgroundColor: 'rgba(0,255,255,.3)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: arr[0]
            },
            
        ]
    };
    const data3 = {
        labels:['Jerusalem','Nablus','Ramallah','Jenen'],
        datasets: [
            {
                label: 'Ahmad',
                backgroundColor: 'rgba(255,0,255,0.3)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: arr[3]
            },
            
        ]
    };
    const data4 = {
        labels:['Jerusalem','Nablus','Ramallah','Jenen'],
        datasets: [
            {
                label: 'Amr',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: arr[2]
            }
        ]
    };

    return(
        <div>
        <Admin/>
            <center style={{display:"flex"}}>
                <div style={{display:"block",width:600,height:400,marginRight:100,marginLeft:50}}>
                    <Pie data={data}/>
                    
                </div>
                <div style={{display:"block",width:600,height:400}}>
                    <Bar data={bardata}/>
                    
                </div>
                
            </center>
            <div style={{display:"inline-block",width:1500}}>
                <div style={{width:600,display:"inline-block"}}>
                    <Radar data={data1}/>
                </div>
                <div style={{width:600,display:"inline-block"}}>

                    <Radar data={data2}/>
                </div>
                <div style={{width:600,display:"inline-block"}}>

                    <Radar data={data3}/>
                </div>
                <div style={{width:600,display:"inline-block"}}>

                    <Radar data={data4}/>
                </div>
            </div>
            
        </div>
    )

}