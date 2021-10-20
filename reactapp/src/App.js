import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import  { Redirect } from 'react-router-dom';
import './App.css';
import UserHotelBooking from './UserHotelBooking';
import Login from './components/Auth/Login/Login';
import AdminSignup from './components/Auth/Signup/AdminSignup';
import Signup from './components/Auth/Signup/UserSignup';
import UserDashboard from './components/UserSide/UserDashboard/UserDashboard';
import HotelDetails from './HotelDetails';
import SuperAdminLogin from './SuperAdminLogin';
import SuperNavbar from './SuperNavbar';
import NavbarHome from './Navbar';
import UserRoomDetails from './UserRoomDetails';
import UserNavbar from './components/UserSide/UserNavbar/UserNavbar';
import AdminProfile from './components/AdminSide/AdminProfile/AdminProfile';
import AdminDashboard from './components/AdminSide/AdminDashboard/AdminDashboard';
import AdminEditRoom from './AdminEditRoom';
import AdminAddRoom from './AdminAddRoom';
import AdminNavbar from './components/AdminSide/AdminNavbar/AdminNavbar';
import AdminProfileEdit from './components/AdminSide/AdminProfile/AdminProfileEdit';
import AdminBooking from './AdminBooking';
import UserProfile from './components/UserSide/UserProfile/UserProfile';
import UserEditProfile from './components/UserSide/UserProfile/UserEditProfile';
import SuperAdminDashboard from './components/SuperAdmin/SuperAdminDashboard/SuperAdminDashboard';
import SuperAdminNavbar from './components/SuperAdmin/SuperAdminNavbar/SuperAdminNavbar';
import SuperAdminBooking from './SuperAdminBookings';
import React from 'react'

function App() {
  localStorage.setItem("baseURL","https://8080-aaafefdebebfaaffabddbdacaffcfecebade.examlyiopb.examly.io");
  return (
    <Router>
    <div className="app">
      
      <Switch>
      {/* User Routings   */}
      <Route path="/user/signup">     
        <Signup/>
      </Route> 
      <Route path="/login">
        <NavbarHome/>   
         <Login />
      </Route>
      <Route path="/user/dashboard">
        if(localStorage.getItem("userEmail")===null) <Redirect to="/login"/>
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
        <UserEditProfile/>
      </Route>
      <Route path="/user/bookings/:userId">          
        <UserNavbar/>      
        <UserHotelBooking />
      </Route>
      <Route path="/user/profile/:userId">          
        <UserNavbar/> 
        <UserProfile/>
      </Route>



      {/* Admin Routings */}
      <Route path="/admin/signup">          
        <AdminSignup/>
      </Route> 
      <Route path="/admin/profile">
         <AdminNavbar/>          
         <AdminProfile/>
      </Route>
      <Route path="/admin/dashboard">          
         <AdminDashboard/>
      </Route>
      <Route path="/admin/addRoom">  
         <AdminNavbar/>         
         <AdminAddRoom/>
      </Route>
      <Route path="/admin/editRoom/:roomId">
         <AdminNavbar/>           
         <AdminEditRoom/>
      </Route>
      <Route path="/admin/bookings/:adminId">          
        <AdminNavbar/> 
        <AdminBooking/>
      </Route>
      <Route path="/admin/editProfile/:adminId">          
        <AdminNavbar/> 
        <AdminProfileEdit/>
      </Route>


      {/* SuperAdmin Routings */}
      <Route path="/superadmin/login">
         <SuperNavbar/>
         <SuperAdminLogin/>
      </Route>
      <Route path="/superadmin/adminList">          
        <SuperAdminNavbar/>
        <SuperAdminDashboard/>
      </Route>
      <Route path="/superadmin/adminBookings">          
        <SuperAdminNavbar/>
        <SuperAdminBooking/>
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
