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

function UserNavbar(){
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
                <div className="Navbar_Hotel" id="userNavbar">
                 <a href='/' className="title"><strong>Rental Rooms</strong></a>
                                <Link to="/user/dashboard" className="dashboard" id="userDashboardLink">Dashboard</Link>
                                <Link to={"/user/profile/"+localStorage.getItem("userId")} className="profile" id="userProfileLink">Profile</Link>
                                <Link to={"/user/bookings/"+localStorage.getItem("userId")} className="mybooking" id="userBookingLink">MyBooking</Link>
                                <button onClick={()=>{logout()}} className="UserLogoutButton" id="userLogoutButton">Logout</button>       
                    
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
export default UserNavbar