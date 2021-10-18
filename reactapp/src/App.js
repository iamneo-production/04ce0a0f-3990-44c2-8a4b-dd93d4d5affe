import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import  { Redirect } from 'react-router-dom';
import './App.css';
import UserHotelBooking from './UserHotelBooking';
import Login from './Login';
import AdminSignup from './AdminSignup';
import UserSignup from './UserSignup';
import UserDashboard from './UserDashboard';
import HotelDetails from './HotelDetails';
import IndividualStatus from './IndividualStatus';
import SuperAdminLogin from './SuperAdminLogin';
import SuperNavbar from './SuperNavbar';
import NavbarHome from './Navbar';
import UserRoomDetails from './UserRoomDetails';
import UserNavbar from './UserNavbar';

import React from 'react'

function App() {
  localStorage.setItem("baseURL","https://8080-aaafefdebebfaaffabddbdacaffcfecebade.examlyiopb.examly.io");
  return (
    <Router>
    <div className="app">
      
      <Switch>
      {/* User Routings   */}
      <Route path="/user/signup">     
        <UserSignup/>
      </Route> 
      <Route path="/login">
        <NavbarHome/>   
         <Login />
      </Route>
      <Route path="/user/dashboard">  
        <UserNavbar/>        
        <UserDashboard />  
      </Route> 
      <Route path="/user/hotelDetail/:hotelId">          
        <UserNavbar/> 
        <HotelDetails/> 
      </Route>
      <Route path="/user/roomDetail/:roomId">          
        <UserNavbar/> 
        <UserRoomDetails />
      </Route>
      <Route path="/user/editProfile/:userId">          
        <UserNavbar/> 
      </Route>
      <Route path="/user/bookings/:userId">          
        <UserNavbar/>      
        <UserHotelBooking />
      </Route>
      <Route path="/user/profile/:userId">          
        <UserNavbar/> 
      </Route>



      {/* Admin Routings */}
      <Route path="/admin/signup">          
        <AdminSignup/>
      </Route> 
      <Route path="/admin/profile/:adminId">          
         
      </Route>
      <Route path="/admin/dashboard">          
         
      </Route>
      <Route path="/admin/addRoom">          
         
      </Route>
      <Route path="/admin/editRoom/:roomId">          
         
      </Route>
      <Route path="/admin/bookings/:adminId">          
         
      </Route>
      <Route path="/admin/editProfile/:adminId">          
         
      </Route>


      {/* SuperAdmin Routings */}
      <Route path="/superadmin/login">
         <SuperNavbar/>
         <SuperAdminLogin/>
      </Route>
      <Route path="/superadmin/adminList">          
         
      </Route>
      <Route path="/superadmin/adminBookings">          
         
      </Route>
      <Route path="/"> 
        <Redirect to='/login'/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
