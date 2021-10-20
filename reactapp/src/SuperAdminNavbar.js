import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './UserNavbar.css';
import { useHistory } from 'react-router-dom';
import {useEffect} from 'react';
import axios from 'axios';

function SuperAdminNavbar(){
        const history = useHistory();
        const baseURL = localStorage.getItem("baseURL");
        const [userId, setUserId]=useState({});
        useEffect(()=>{
            axios.get(baseURL+'/user/detail?email='+localStorage.getItem("userEmail"))
                .then(response => {
                    localStorage.setItem("userId",response.data.id);
                })
                .catch(error => {
                    console.log('There was an error!', error);      
                });
        },[])
        function logout(){
            localStorage.clear();
            sessionStorage.clear();
            localStorage.setItem("baseURL","https://8080-aaafefdebebfaaffabddbdacaffcfecebade.examlyiopb.examly.io");
            history.push("/login");
        }
        return (
            // <Router>
                <div className="Navbar_Hotel" id="superAdminNavbar">
                 <a href='/' className="title"><strong>Rental Rooms</strong></a>
                                <Link to="/superadmin/adminList" className="dashboard" id="superAdminDashboardLink">Dashboard</Link>
                                <Link to="/superadmin/adminBookings" className="mybooking" id="superAdminBookingLink">All Bookings</Link>
                                <button onClick={()=>{logout()}} className="UserLogoutButton" id="superAdminLogoutButton">Logout</button>       
                    
                </div>
                /* <div>
                    <Switch>
                    <Route path="/user/dashboard">
                        <Redirect to='/user/dashboard'/>
                            </Route>
                    <Route path="/user/profile">
                        <Redirect to='/user/profile'/>
                            </Route>
                    <Route path="/user/bookings">
                        <Redirect to='/user/bookings'/>
                            </Route>
                    <Route path="/Editprofile">
                            <Editprofile />
                            </Route>
                        
                    </Switch>
                </div>
            </Router> */
        )
        }
export default SuperAdminNavbar