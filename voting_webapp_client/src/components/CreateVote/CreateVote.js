import React, {useEffect, useState} from "react";
import {Button, Container, ProgressBar, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

useEffect(()=>{
    setLogged(true)
}, [logged])


console.log(props.userId)
const CreateVote = () => {
    const [startVoting, setStartVoting] = useState(true)
    const [legislativeVote, setLegislativeVote] = useState('')
    const [showLegislative, setShowLegislative] = useState(false)
    const [presidentialVote, setPresidentialVote] = useState('')
    const [showPresidential, setShowPresidential] = useState(false)
    const [endVoting, setEndVoting] = useState(false)
    const [user, setUser] = useState("")
    const [partyLists, setPartyLists] = useState([])
    const [presidents, setPresidents] = useState([])
    const [updatedUser,setUpdatedUser] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8000/api/parties")
            .then(response => setPartyLists((response.data)))
            .catch(error => console.log("There was an issue: ", error))

        axios.get("http://localhost:8000/api/presidents")
            .then(response => setPresidents((response.data)))
            .catch(error => console.log("There was an issue: ", error))

        axios.get("http://localhost:8000/api/official/getById/1234")
            .then(response => setUser((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    }, [])


    const StartHandler = e => {
        setStartVoting(false);
        displayLegislative();
    };

    const legislativeVoteHandler= e => {
        const confirmWindow = window.confirm("Are you sure you want to vote for " + e.target.value + "?");
        if (confirmWindow) {
            const eValue = e.target.value.split(",")
            user[0].legislativeVote.candidate = eValue[0];
            user[0].legislativeVote.partyList = eValue[1];
            setLegislativeVote(e.target.value);
        }
        else
            e.target.checked = false
    };

    const presidentialVoteHandler= e => {
        const confirmWindow = window.confirm("Are you sure you want to vote for " + e.target.value + "?");
        if (confirmWindow) {
            const eValue = e.target.value.split(",")
            user[0].presidentialVote.candidate = eValue[0];
            user[0].presidentialVote.partyList = eValue[1];
            setPresidentialVote(e.target.value);
        }
        else
            e.target.checked = false
    };

    const hideOptions = () => {
        setStartVoting(true)
        setShowLegislative(false);
        setShowPresidential(false);
    }

    const displayLegislative = () => {
        setShowLegislative(true);
        setShowPresidential(false);
    };

    const displayPresidential = () => {
        setShowLegislative(false);
        setShowPresidential(true);
    };

    const confirmHandler = e => {
        e.preventDefault();
        console.log(user)
        axios.put("http://localhost:8000/api/official/edit/60348153e1d8a8465855477b", {
            firstName:user[0].firstName,
            lastName:user[0].lastName,
            ID:user[0].ID,
            registrationNumber:user[0].registrationNumber,
            gender:user[0].gender,
            district:user[0].district,
            legislativeVote:{
                candidate:user[0].legislativeVote.candidate,
                partyList:user[0].legislativeVote.partyList,
            },
            presidentialVote:{
                candidate:user[0].presidentialVote.candidate,
                partyList:user[0].presidentialVote.partyList,
            }
        })
            .then(response => setUpdatedUser((response.data)))
            .catch(error => console.log("There was an issue: ", error))

        setStartVoting(false)
        setShowLegislative(false);
        setShowPresidential(false)
        setEndVoting(true);
    };

    const progressBar = () => {
        if (startVoting)
            return "0"
        else if (showLegislative)
            return "33"
        else if (showPresidential)
            return "66"
        else if (!showLegislative && !showPresidential)
            return "100"
    };

    return(
        <Container>
        <Header />
            <h1>Welcome to  Central Elections Commission Electronic Voting System</h1>
            <ProgressBar animated now={progressBar()} label={`${progressBar()}%`} />
            {
                startVoting ?
                    <>
                        <div style={{height:"225px"}}/>
                        <p style={{height:"300px"}}>Please click the Start button, to begin your voting process...</p>
                        <Button variant="success" size="lg" onClick={StartHandler}>Start!</Button>
                    </>
                : ''
            }
            {
                showLegislative ?
                    <>
                        <Container fluid>
                            <h5>Legislative Elections</h5>
                            <h5>Electoral District: {user[0].district}</h5>
                            <h5>Please make one selection:</h5>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Candidate Name</th>
                                    <th>Party List Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    partyLists.map((party, index) => {
                                        return(
                                            <tr key={index} onChange={legislativeVoteHandler}>
                                                <td style={{textAlign:"center"}}><input type="radio" value={[party.candidateName, party.listName]} name={"legislativeChoice"} autoFocus/></td>
                                                <td style={{textAlign:"center"}}>{party.candidateName}</td>
                                                <td style={{textAlign:"center"}}>{party.listName}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </Table>
                    </Container>
                    <Button variant="danger" size="lg" onClick={hideOptions}>Previous</Button> <Button variant="primary" size="lg" onClick={displayPresidential}>Next</Button>
                </>
                    : ''
            }
            {
                showPresidential ?
                    <>
                        <Container>
                            <h5>Presidential Elections</h5>
                            <h5>Electoral District: {user[0].district}</h5>
                            <h5>Please make one selection:</h5>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Candidate Name</th>
                                    <th>Party List Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    presidents.map((president, index) => {
                                        return(
                                            <tr key={index} onChange={presidentialVoteHandler}>
                                                <td style={{textAlign:"center"}}><input type="radio" value={[president.candidateName, president.listName]} name={"presidentChoice"} autoFocus/></td>
                                                <td style={{textAlign:"center"}}>{president.candidateName}</td>
                                                <td style={{textAlign:"center"}}>{president.listName}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </Table>
                        </Container>
                        <Button variant="danger" size="lg" onClick={displayLegislative}>Previous</Button> <Button variant="primary" size="lg" onClick={confirmHandler} disabled={!legislativeVote || !presidentialVote}>Confirm</Button>
                    </>
                    : ''
            }
            {
                endVoting ?
                    <Container>
                        <br/>
                        <h3>Thank you for voting!</h3>
                    </Container>
                    : ''
            }
            <br/><br/>
            <Footer/>
        </Container>
    )
};

export default CreateVote;