import React from 'react';
import  { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap';
import Editprofile from './EditProfile';
import './UserNavbar.css';
import UserProfleLink from './UserDashboard';
import UserBookingLink from './UserHotelBooking';
import UserDashboardLink from './UserDashboard';
import { useHistory } from 'react-router-dom';

function Hotel_Navbar(){
        const history = useHistory();
        function logout(){
            localStorage.clear();
            sessionStorage.clear();
            history.push("/login");
        }
        return (
            // <Router>
                <div className="Navbar_Hotel">
                 <a href='#' className="title"><strong>Rental Rooms</strong></a>
                                <Link to="/user/dashboard" className="dashboard">Dashboard</Link>
                                <Link to="/user/profile" className="profile">Profile</Link>
                                <Link to="/user/booking" className="mybooking">MyBooking</Link>
                                <button onClick={()=>{logout()}} className="UserLogoutButton">Logout</button>
                            <br/>
   
        
                    
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
export default Hotel_Navbar