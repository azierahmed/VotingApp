import './App.css';
import Connection from './components/Home/Connection';
import MainPage from './components/Home/MainPage';
import { Router, Redirect } from "@reach/router";
import Login from './components/Home/Login';
import Register from './components/Home/Register';
import React, {useEffect, useState} from 'react';
import AdminPage from './components/Home/AdminPage';
import Cookies from "universal-cookie";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";


function App() {
  const cookies = new Cookies();
  const [cookie, setCookie] = useState(null);
  useEffect(() => {
    setCookie(cookies.get("cookies1"))
  }, [])

  const rerender = () => {
    setCookie(cookies.get("cookies1"));
  }

    return (
        <div className="App">
          <Header userId={cookie}/>
          <Router>
            <Redirect from="/" to="home" noThrow/>
            <MainPage path="/home"/>
            <Login path="/login"/>
            <Register path="/register" />
            <Connection path="/valid"/>
            <AdminPage path="admin/*"/>
          </Router>
          <Footer/>
        </div>
    );
}

export default App;