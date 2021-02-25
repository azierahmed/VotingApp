import {useState,useEffect} from "react";
import {Radar,Pie,Bar} from 'react-chartjs-2';
import Admin from "./Admin";
import axios from "axios";
import { Paper } from '@material-ui/core';





const styles = {
    paper: {
        width: "100%", padding: "1rem", marginleft: "1rem",
    }

}






export default props => {
    const [lab,setlab]=useState("");
    const [candVotes, setCandVotes] = useState([])
    const [votesPerDist, setvotesPerDist] = useState([])
    const [partyVotes, setCandPartyVotes] = useState([])

    const [cands,setcands]=useState();



    const presidents=[]
    const distName=[]
    const parties=[]
    const [dist,setDist]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/presidents")
            .then(response => setcands(response.data))
            .catch(error => console.log("There was an issue: ", error))
        axios.get("http://localhost:8000/api/districts")
            .then(response => setDist(response.data))
            .catch(error => console.log("There was an issue: ", error))
    }, [])


    if(cands !=undefined&& dist.length>0){


        cands.map((cand, index) => {
            presidents.push(cand.candidateName)
            parties.push(cand.listName)
        })
        dist.map((name, index) => {
            distName.push(name.districtName)
        })
        console.log(presidents,parties,distName,"here")
    }

    if(cands!=null)(
    cands.map((cand, index) => presidents.push(cand.candidateName))
    )

    useEffect(() => {
        if(cands !== undefined && distName.length > 0){
            presidents.map((president,index)=>{
                axios.get("http://localhost:8000/api/official/pres/candidate/"+president)
                    .then(response=>setCandVotes(candVotes.concat(response.data.length)))
                    .catch(err=> console.log("There was an issue: ", err))

                const fordist=[]

                distName.map((district)=>{
                    axios.get("http://localhost:8000/api/official/pres/cand_dist/"+district+"/"+president)
                        .then(response=>fordist.push(response.data.length))
                        .catch(err=> console.log("There was an issue: ", err))
                })
                votesPerDist.push(fordist)
            })
        }
    },[dist])



    const bardata= (presidents, votes) => (
        {
            labels:["Tareq", "Anmar", "Ahmad", "Amr"],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: ['rgba(255,255,0,0.3)','rgba(0,255,255,.3)','rgba(255,0,255,0.3)','rgba(255,99,132,0.2)'],
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [15,25,20,18,0],

                }
            ]
        }
    );
    const piedata= (Party,votes) => (
        {
            labels:Party,
            datasets: [{
                data:[4,3,5,2],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#c7f858'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#c7f858'

                ]
            }]
        }
    );

//radar
    const data1 = {
        labels:distName,
        datasets: [
            {
            label: 'Tareq',
            backgroundColor: 'rgba(255,255,0,0.3)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(255,255,0,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [5,6,3,4,8,9,2,3,1,2,5]
            },
        ]
    };
    const data2= {
        labels:distName,
        datasets: [
            
            {
            label: 'Ammar',
            backgroundColor: 'rgba(0,255,255,.3)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [3,4,5,6,4,8,9,7,5,1]
            },
            
        ]
    };
    const data3 = {
        labels:distName,
        datasets: [
            {
                label: 'Ahmad',
                backgroundColor: 'rgba(255,0,255,0.3)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [6,5,8,9,7,2,3,1,5,6,4]
            },
            
        ]
    };
    const data4 = {
        labels:distName,
        datasets: [
            {
                label: 'Amr',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [6,3,2,1,8,9,7,5,3,1,2]
            }
        ]
    };

    return(
        <div>
        <Paper elevation={10} style={styles.paper}>
            <center style={{display:"flex"}}>
                <div style={{display:"block",width:600,height:400}}>
                    <Pie data={piedata(parties, candVotes)}/>
                    
                </div>
                <div style={{display:"block",width:600,height:400}}>
                    <Bar data={bardata(presidents, candVotes)}/>
                    
                </div>
            </center>
            </Paper><br/> <br/><br/><br/>
            <div className="picPaper" style={{}}>
            <div className="Radar1" >
                <Paper className="paper000">
                    <div style={{width:600,display:"flex"}}>
                        <Radar data={data1}/>
                    </div>
                </Paper>
                <Paper className="paper000">
                    <div style={{width:600,display:"flex"}}>

                        <Radar data={data2}/>
                    </div>
                </Paper>
                </div><br/>

                <div className="Radar2" >
                <Paper className="paper000">
                    <div style={{width:600,display:"inline-block"}}>

                        <Radar data={data3}/>
                    </div>
                </Paper>
                <Paper className="paper000">
                    <div style={{width:600,display:"inline-block"}}>

                        <Radar data={data4}/>
                    </div>
                </Paper>
            </div><br/><br/>
            </div>
            
        </div>
    )

}