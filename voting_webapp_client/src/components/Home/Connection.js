import React from 'react';
import Cookies from 'universal-cookie';
import {useState, useEffect} from 'react';
import CreateVote from '../CreateVote/CreateVote'
import Login from './Login';

function Connection(props) {
    const cookies = new Cookies();
    const [cookie, setCookie] = useState(null);
    useEffect(() => {
        setCookie(cookies.get("cookies1"))
    }, [])
    
    const rerender = () => {
        setCookie(cookies.get("cookies1"));
        console.log("sdhgsjkdhgsjd");
    }

    return (
        <>
        { (!cookie) ? <> <Login rerender={rerender} /> </> : <CreateVote userId={cookie} />}
        </>
    );
}

export default Connection;