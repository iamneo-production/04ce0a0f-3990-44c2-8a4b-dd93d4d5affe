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

function Hotel_Navbar(){
        return (
            <Router>
                <div className="Navbar_Hotel">
                

                    <Navbar  variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">&nbsp;Rently-Rooms</Navbar.Brand>
                        
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                
                                <Nav.Link as={Link} to="/UserDashboardLink">Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/UserProfleLink">Profile</Nav.Link>
                                <Nav.Link as={Link} to="/UserBookingLink">MyBooking</Nav.Link>
                                
            
                            </Nav>
                            
                        </Navbar.Collapse>  

                        <a href='Login'> <button className="UserLogoutButton">Logout
                        </button></a>
   
        

                    </Navbar>
                    
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
