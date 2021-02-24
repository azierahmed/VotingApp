import React from 'react';
import Cookies from 'universal-cookie';
import {useState, useEffect} from 'react';
import Login from './Login';
import Main from '../Admin/Main';

function AdminPage() {

    const [cookie, setCookie] = useState(null);
    useEffect(() => {
        setCookie(cookies.get("cookies1"))
    }, [])
    const cookies = new Cookies();
    const rerender = () => {
        setCookie(cookies.get("cookies1"));
    }

    return (
        <>
        { (!cookie) ? <> <Login x={rerender}/> </>: <Main />}
        </>
    );
}

export default AdminPage;