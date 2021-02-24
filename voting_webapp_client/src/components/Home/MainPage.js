import React from 'react'
import { ArrowLeft, ArrowRight, AlarmFill, ArchiveFill } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, iframe } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import four from '../../assets/four.jpg';
import video1 from '../../assets/video1.mp4';
import vote3 from '../../assets/vote3.png';
import vote5 from '../../assets/vote5.jpg';
import vote6 from '../../assets/vote6.jpg';
import vote9 from '../../assets/vote9.jpg';

import { Link } from "@reach/router";
const MainPage = () => {


    return (
        <div className="main">
            <div className="header">
            <Header/>
            </div>
            <div className="mainpage"><br />

                <div className="fisrtpic">
                    <img src={vote3} alt="vote3" />
                </div>

                <hr className="hr1" />
                    
                        <div className="body">
                    <a class="btn btn-primary" href="/valid" role="button">Click Here To Go To Vote <ArchiveFill /></a>
                </div>
                <hr className="hr1" />
                <br /><br />

                <div class="container marketing">
                <div class="row">
                    <div class="col-lg-4">
                        <img class="rounded-circle" src={vote5} alt="Generic placeholder image" width="200" height="200"/>
                            <h2>Voter Registration for the 2021</h2>
                            <p>The Central Elections Commission (CEC), announced today the commencement of field voter registration for the upcoming 2021 Palestinian elections, which will continue until February 16th for both legislative and presidential elections.</p>
                            <br/><br/><br/>
                            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
                            </div>
                            <div class="col-lg-4">
                            <img class="rounded-circle" src={vote6} alt="Generic placeholder image" width="200" height="200"/>
                                <h2>Concludes Voter Registration for the 2021 </h2>
                                <p>The Central Elections Commission (CEC) announced a total of 2.6 million registered voters as of the end of the registration process at midnight yesterday, including 421,000 new registrants, now able to participate in the upcoming 2021 Palestinian Elections.</p>
                                <br/><br/><br/>
                                <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
                                </div>
                                <div class="col-lg-4">
                                <img class="rounded-circle" src={vote9} alt="Generic placeholder image" width="200" height="200"/>
                                    <h2>Challenge Period for the 2021</h2>
                                    <p>The Central Elections Commission (CEC) welcomed the decree issued by President Mahmoud Abbas on Saturday, further promoting public freedoms and facilitating the work of the CEC throughout the legislative and presidential elections. The decree ensures the level of freedom of expression necessary to carry out a free, fair, and democratic electoral process where all lists and candidates have equal opportunities.</p>
                                    
                                    <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
                                </div>
                                
                            </div>
                        </div>
                        
                <br />
                <hr className="hr1" />
                    <br /><br />
                <div className="media">
                    <video width="800" controls>
                        <source src={video1}  type="video/mp4" />
                    </video>
                </div><br />
                <br />
                
                        </div>
                        <div>
                        <Footer/>
                        </div>
                    </div>
    )
}

export default MainPage
