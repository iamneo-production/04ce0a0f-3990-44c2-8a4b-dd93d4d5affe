import React from 'react';
import  { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './components/UserSide/UserNavbar/UserNavbar.css'
import { useHistory } from 'react-router-dom';

function SuperNavbar(){
        const history = useHistory();
        function logout(){
            localStorage.clear();
            sessionStorage.clear();
            history.push("/login");
        }
        return (
            // <Router>
                <div className="Navbar_Hotel">
                 <a href='/' className="title"><strong>Rental Rooms</strong></a>
                                {/* <Link to="/user/dashboard" className="dashboard">Dashboard</Link>
                                <Link to="/user/profile" className="profile">Profile</Link>
                                <Link to="/user/booking" className="mybooking">MyBooking</Link> */}
                                
                                <button onClick={()=>{logout()}} className="UserLogoutButton">User Login</button>
                            <br/>
   
        
                    
                </div>
        )
        }
export default SuperNavbar;