import React,{ useState } from 'react';
import {Paper, FormControl, InputLabel, OutlinedInput, Button } from '@material-ui/core';
import { Link, navigate } from "@reach/router";
import logo from '../../assets/logo.png';
import {PersonFill, CardHeading, ArchiveFill, TelephoneFill, EnvelopeFill, GeoAltFill, LockFill} from 'react-bootstrap-icons';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';
const Cookie = require("universal-cookie");


const styles = {
    paper: {
        width: "32rem", padding: "2rem", margin: "5rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    },
    img: {
        width: "20%"
    },
    Link: {
        color: "#A9A9A9", textDecoration: 'none',fontSize : "12px"
    }
}
export default function LoginForm(props) {
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [idNumber, setidNumber] = useState("");
    const [regNumber, setregNumber] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [Location, setLocation] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', {
            firstName,
            lastName,
            idNumber,
            regNumber,
            phoneNumber,
            Location,
            email,
            password
        })
        .then(res=>{
            Cookie.set(res);
            console.log(Cookie)})
        .catch(err=>console.log(err))
        navigate("/login")
    }

    return (
        <div className="main">
            <div className="header">
            <Header/>
            </div>
            <center>
                <Paper elevation={20} style={styles.paper}>
                    <>
                        <InputLabel variant="text">Register User</InputLabel><br />
                    </>
                    <img src={logo} alt="Logo" style={styles.img} />
                    <form onSubmit={onSubmitHandler}><br />
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel ><PersonFill /> First Name:</InputLabel>
                            <OutlinedInput type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                        </FormControl>

                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel ><PersonFill /> Last Name:</InputLabel>
                            <OutlinedInput type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                        </FormControl>

                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel ><CardHeading /> ID Number:</InputLabel>
                            <OutlinedInput type="number" onChange={(e)=>setidNumber(e.target.value)} value={idNumber}/>
                        </FormControl>

                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel ><ArchiveFill /> Registration number:</InputLabel>
                            <OutlinedInput type="text" onChange={(e)=>setregNumber(e.target.value)} value={regNumber}/>
                        </FormControl>

                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel ><GeoAltFill /> Location</InputLabel>
                            <OutlinedInput type="text" onChange={(e)=>setLocation(e.target.value)} value={Location}/>
                        </FormControl>

                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel ><TelephoneFill /> Phone Number:</InputLabel>
                            <OutlinedInput type="number" onChange={(e)=>setphoneNumber(e.target.value)} value={phoneNumber}/>
                        </FormControl>

                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel ><EnvelopeFill /> E-mail</InputLabel>
                            <OutlinedInput type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
                        </FormControl>

                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel ><LockFill /> Password</InputLabel>
                            <OutlinedInput type="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
                        </FormControl><br />

                        <Button type="submit" variant="contained" color="secondary" >
                            Register
                        </Button>
                    </form>
                    <p>
                        <Link to={"/login"} style={styles.Link}>If You Have An Account, Go to Login</Link>
                    </p>
                </Paper><br /><br /><br /><br /><br />
            </center>
            <Footer/>
        </div>
    )
}
