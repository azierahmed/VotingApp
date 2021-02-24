import './App.css';
import Connection from './components/Home/Connection';
import MainPage from './components/Home/MainPage';
import { Router, Redirect } from "@reach/router";
import Login from './components/Home/Login';
import Register from './components/Home/Register';
import React,{ useState, useEffect} from 'react';
import AdminPage from './components/Home/AdminPage';

function App() {
    return (
        <div className="App">
      <Router>
        <Redirect from="/" to="home" noThrow/>
        <MainPage path="/home"/>
        <Login path="/login"/>
        <Register path="/register" />
        <Connection path="/valid"/>
        <AdminPage path="admin/*"/>
      </Router>
        </div>
    );
}

export default App;