import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap';
import Editprofile from './EditProfile';
import './UserNavbar.css';
import UserProfleLink from './UserHotelBooking';
import UserBookingLink from './UserHotelBooking';
import UserDashboardLink from './UserHotelBooking';
//import adminAddRoom from './AdminAddRoom';
function Hotel_Navbar(){
        return (
            <Router>
                <div className="userNavbar">
                

                    
                       &nbsp;&nbsp;&nbsp; <a href='#' className="title"><strong>Rental Rooms</strong></a>
                        
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Nav.Link as={Link} to="/UserDashboardLink" className="userDashboardLink">Dashboard</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Nav.Link as={Link} to="/UserProfileLink" className="userProfileLink">Profile</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Nav.Link as={Link} to="/UserBookingLink" className="userBookingLink">MyBooking</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href='Login' className="userLogoutButton">Logout</a>
                            <br/>
   
        
                    
                </div>
                <div>
                    <Switch>
                    <Route path="/UserDashboardLink">
                            <UserDashboardLink />
                            </Route>
                    <Route path="/UserProfleLink">
                            <UserProfleLink />
                            </Route>
                    <Route path="/UserBookingLink">
                            <UserBookingLink />
                            </Route>
                    <Route path="/Editprofile">
                            <Editprofile />
                            </Route>
                        
                    </Switch>
                </div>
            </Router>
        )
        }
export default Hotel_Navbar
