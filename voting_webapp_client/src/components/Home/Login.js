import React, { useEffect, useState } from 'react'
import { Paper, FormControl, InputLabel, OutlinedInput, Button , CardContent, Card, Icon} from '@material-ui/core';
import logo from '../../assets/logo.png';
import {PersonBadge, FileLock2 } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { navigate, Link, Redirect } from '@reach/router';

const styles = {
    paper: {
        width: "20rem", padding: "3rem", margin: "2rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    },
    img: {
        width: "30%"
    },
    Link: {
        color: "#A9A9A9", textDecoration: 'none',fontSize : "12px"
    }
}



const Login = (props) => {

    const [ID, setID] = useState("");
    const [password, setpassword] = useState("");
    const cookies = new Cookies();


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {
            ID,
            password
        })
        .then(res=> {
            cookies.set("cookies1", res.data.user);
            console.log(cookies.get("cookies1"));
            navigate('/valid');
            props.rerender();
            // props.userId(res.data.user._id)
        })
        .catch(err=>console.log(err))
        
    }

    console.log(cookies.get("cookies1"));
    return (
        
        <div className="main">
            <center>
                <Paper elevation={20} style={styles.paper}>
                    <>
                        <InputLabel variant="text">Login User</InputLabel><br />
                    </>
                    <img src={logo} alt="Logo" style={styles.img} />
                    <form onSubmit={onSubmitHandler}><br />
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel><PersonBadge/> ID Number:</InputLabel>
                            <OutlinedInput type="text" onChange={(e)=>setID(e.target.value)} value={ID}/>
                        </FormControl>

                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel><FileLock2 /> Password</InputLabel>
                            <OutlinedInput type="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
                        </FormControl><br />

                        <Button type="submit" variant="contained" color="primary" >
                            LOGIN
                        </Button>

                    </form>
                    <p>
                        <Link to={"/register"} style={styles.Link}>If You Don't Have An Account, Go to Register</Link>
                    </p>
                    
                </Paper>
            </center><br/>
        </div>
    )
}

export default Login
