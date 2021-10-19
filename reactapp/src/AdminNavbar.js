import React from 'react';
import  { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './UserNavbar.css';
import { useHistory } from 'react-router-dom';

function AdminNavbar(){
        const history = useHistory();
        function logout(){
            localStorage.clear();
            sessionStorage.clear();
            localStorage.setItem("baseURL","https://8080-aaafefdebebfaaffabddbdacaffcfecebade.examlyiopb.examly.io");
            history.push("/login");
        }
        return (
            // <Router>
                <div className="Navbar_Hotel" id="adminNavbar">
                 <a href='#' className="title"><strong>Rental Rooms</strong></a>
                                <Link to="/admin/dashboard" className="dashboard" id="adminDashboardLink">Dashboard</Link>
                                <Link to="/admin/profile" className="profile" id="adminProfileLink">Profile</Link>
                                <Link to={"/admin/bookings/"+localStorage.getItem("adminId")} className="mybooking" id="adminBookingLink">Booking</Link>
                                <button onClick={()=>{logout()}} className="UserLogoutButton" id="adminLogoutButton">Logout</button>       
                    
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
export default AdminNavbar;
