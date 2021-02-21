import React, {useState} from "react";
import {Button, Container, ProgressBar, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const CreateVote = () => {
    const [startVoting, setStartVoting] = useState(true)
    const [legislativeVote, setLegislativeVote] = useState('')
    const [showLegislative, setShowLegislative] = useState(false)
    const [presidentialVote, setPresidentialVote] = useState('')
    const [showPresidential, setShowPresidential] = useState(false)
    const [endVoting, setEndVoting] = useState(false)

    const StartHandler = e => {
        setStartVoting(false);
        displayLegislative();
        progressBar(0);
    };

    const legislativeVoteHandler= e => {
        const confirmWindow = window.confirm("Are you sure you want to vote for " + e.target.value + "?");
        if (confirmWindow) {
            setLegislativeVote(e.target.value);
        }
    };

    const presidentialVoteHandler= e => {
        const confirmWindow = window.confirm("Are you sure you want to vote for " + e.target.value + "?");
        if (confirmWindow) {
            setPresidentialVote(e.target.value);
        }
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

    const displayConfirmation = () => {
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
            <h1>Welcome to  Central Elections Commission Electronic Voting System</h1>
            <ProgressBar animated now={progressBar()} label={`${progressBar()}%`} />
            {
                startVoting ?
                    <>
                        <div style={{height:"225px"}}/>
                        <p style={{height:"300px"}}>Please click the Start, to begin your voting process</p>
                        <Button variant="success" size="lg" onClick={StartHandler}>Start!</Button>
                    </>
                : ''
            }
            {
                showLegislative ?
                    <>
                        <Container fluid  onChange={legislativeVoteHandler}>
                            <h5>Legislative Elections</h5>
                            <h5>Electoral District: Jerusalem</h5>
                            <h5>Please make one selection:</h5>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Candidate Name</th>
                                    <th>Part List Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Change And Reform" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Ammar Banner</td>
                                    <td style={{textAlign:"center"}}>Change and Reform</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Change And Reform" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Ahmad Zagyer</td>
                                    <td style={{textAlign:"center"}}>Change and Reform</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Independent" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Tareq Aljamal</td>
                                    <td style={{textAlign:"center"}}>Independent</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Fatah movement" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Kamal Nouri</td>
                                    <td style={{textAlign:"center"}}>Fatah movement</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Change And Reform" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Ammar Banner</td>
                                    <td style={{textAlign:"center"}}>Change and Reform</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Change And Reform" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Ahmad Zagyer</td>
                                    <td style={{textAlign:"center"}}>Change and Reform</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Independent" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Tareq Aljamal</td>
                                    <td style={{textAlign:"center"}}>Independent</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Fatah movement" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Kamal Nouri</td>
                                    <td style={{textAlign:"center"}}>Fatah movement</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Change And Reform" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Ammar Banner</td>
                                    <td style={{textAlign:"center"}}>Change and Reform</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Change And Reform" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Ahmad Zagyer</td>
                                    <td style={{textAlign:"center"}}>Change and Reform</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Independent" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Tareq Aljamal</td>
                                    <td style={{textAlign:"center"}}>Independent</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Fatah movement" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Kamal Nouri</td>
                                    <td style={{textAlign:"center"}}>Fatah movement</td>
                                </tr>
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
                        <Container onChange={presidentialVoteHandler}>
                            <h5>Presidential Elections</h5>
                            <h5>Electoral District: Jerusalem</h5>
                            <h5>Please make one selection:</h5>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Candidate Name</th>
                                    <th>Part List Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Change And Reform" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Ammar Banner</td>
                                    <td style={{textAlign:"center"}}>Change and Reform</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Change And Reform" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Ahmad Zagyer</td>
                                    <td style={{textAlign:"center"}}>Change and Reform</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Independent" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Tareq Aljamal</td>
                                    <td style={{textAlign:"center"}}>Independent</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Fatah movement" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Kamal Nouri</td>
                                    <td style={{textAlign:"center"}}>Fatah movement</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Change And Reform" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Ammar Banner</td>
                                    <td style={{textAlign:"center"}}>Change and Reform</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Change And Reform" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Ahmad Zagyer</td>
                                    <td style={{textAlign:"center"}}>Change and Reform</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Independent" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Tareq Aljamal</td>
                                    <td style={{textAlign:"center"}}>Independent</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Fatah movement" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Kamal Nouri</td>
                                    <td style={{textAlign:"center"}}>Fatah movement</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign:"center"}}><input type="radio" value="Change And Reform" name="userChoice" autoFocus/></td>
                                    <td style={{textAlign:"center"}}>Ammar Banner</td>
                                    <td style={{textAlign:"center"}}>Change and Reform</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Container>
                        <Button variant="danger" size="lg" onClick={displayLegislative}>Previous</Button> <Button variant="primary" size="lg" onClick={displayConfirmation} disabled={!legislativeVote || !presidentialVote}>Confirm</Button>
                    </>
                    : ''
            }
            {
                endVoting ?
                    <Container>
                        <h3>Thank you for voting!</h3>
                        <p>You have voted for {legislativeVote} in the Legislative Race</p>
                        <p>You have voted for {presidentialVote} in the Presidential Race</p>
                    </Container>
                    : ''
            }
        </Container>
    )
};

export default CreateVote;