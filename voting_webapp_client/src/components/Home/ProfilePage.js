import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import { Link, navigate} from '@reach/router';
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , CardContent} from '@material-ui/core';

const ProfilePage = props => {

    // const [foundUser, setfoundUser] = useState({})
    
    // useEffect(() => {
    //         setfoundUser(props.userId)
            
    // }, []) 

    const [clear, setclear] = useState("");

    const cookies = new Cookies();

    const onSubmitHandler = e => {
        e.preventDefault();
        
            cookies.remove("cookies1");
            navigate('/');
        }



    return (
        <div>

        {
            props.userId  ?
            <><br/>
            <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th scope="col">First Name: {props.userId.firstName}</th>
                        <th scope="col">Last Name: {props.userId.lastName}</th>
                    </tr>
                    <tr>
                        <th scope="col">ID: {props.userId.ID}</th>
                        <th scope="col">Registration Number: {props.userId.registrationNumber}</th>
                    </tr>
                    <tr>
                        <th scope="col">Phone Number: {props.userId.phoneNumber}</th>
                        <th scope="col">Email: {props.userId.email}</th>
                    </tr>
                    </thead>
                </Table>
                <br/>
                <form onSubmit={(e)=>onSubmitHandler(e)}>
                    <Button type="submit" variant="contained" color="primary" >
                        Logout
                    </Button>
                </form>
            </>
            :
            <h1>Nothing Here!</h1>
        }
            
            <br />
            <Link to={`/`}>Back</Link>
        </div>
    )
}

export default ProfilePage
