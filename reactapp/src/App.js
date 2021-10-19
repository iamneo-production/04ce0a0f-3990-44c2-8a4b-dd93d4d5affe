import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import  { Redirect } from 'react-router-dom';
import './App.css';
import UserHotelBooking from './UserHotelBooking';
import Hotel_Navbar from './UserNavbar';
import AdminNavbar from './AdminNavbar';
import Login from './Login';
import AdminSignup from './AdminSignup';
import UserDashboard from './UserDashboard';
import HotelDetails from './HotelDetails';
import IndividualStatus from './IndividualStatus';
import AdminDashboard from './AdminDashboard';
import AdminProfile from './AdminProfile';
import Editprofile from './EditProfile';
import adminprofileEdit from './AdminProfileEdit';
import Room from './Room';
import React from 'react';
import SuperAdminLogin from './SuperAdminLogin';

function App() {
  localStorage.setItem("baseURL","https://8080-aaafefdebebfaaffabddbdacaffcfecebade.examlyiopb.examly.io");
  return (
    <Router>
    <div className="app">
      
      <Switch>
      {/* User Routings   */}
      <Route path="/user/bookings">    
        <Hotel_Navbar/>      
        <UserHotelBooking />
      </Route>  
      <Route path="/login">          
         <Login />cd 
      </Route>
      <Route path="/room">          
         <Room/>
      </Route>
      <Route path="/user/dashboard">          
        <UserDashboard />  
      </Route>
      <Route path="/adminNavbar">          
        <AdminNavbar />  
      </Route> 
      <Route path="/user/hotelDetail">          
        <HotelDetails/> 
      </Route>
      <Route path="/user/roomDetail">          
        <IndividualStatus />
      </Route>
      <Route path="/user/editProfile/{userId}">          
         
      </Route>
      <Route path="/user/bookings/{userId}">          
         
      </Route>
      <Route path="/user/profile/{userId}">          
         
      </Route>
      <Route path="/user/editProfile">
      
         <Editprofile/>
      </Route>



      {/* Admin Routings */}
      <Route path="/admin/signup">          
        <AdminSignup/>
      </Route> 
      <Route path="/admin/profile/{adminId}">          
         
      </Route>
      <Route path="/admin/dashboard">          
         <AdminDashboard/>
      </Route>
      <Route path="/admin/addRoom">          
         
      </Route>
      <Route path="/admin/editRoom/{roomId}">          
         
      </Route>
      <Route path="/admin/bookings/{adminId}">          
         
      </Route>
      <Route path="/admin/editProfile/{adminId}">          
         
      </Route>
      <Route path="/admin/editprofiles">          
         <adminprofileEdit/>
      </Route>


      {/* SuperAdmin Routings */}
      <Route path="/superadmin/login">          
         <SuperAdminLogin/>
      </Route>
      <Route path="/superadmin/adminList">          
         
      </Route>
      <Route path="/superadmin/adminBookings"> 

      </Route>
      <Route path="/admin/profile">          
         <AdminProfile/>
      </Route>
      <Route path="/"> 
        <Redirect to='/user/editProfile'/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
