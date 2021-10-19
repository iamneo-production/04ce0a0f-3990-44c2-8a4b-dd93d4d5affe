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
import SuperAdminLogin from './SuperAdminLogin';
import SuperNavbar from './SuperNavbar';
import NavbarHome from './Navbar';
import UserRoomDetails from './UserRoomDetails';
import UserNavbar from './UserNavbar';
import AdminProfile from './AdminProfile';
import AdminDash from './AdminDash';
import AdminEditRoom from './AdminEditRoom';
import AdminAddRoom from './AdminAddRoom';
import AdminNavbar from './AdminNavbar';
import AdminProfileEdit from './AdminProfileEdit';
import AdminBooking from './AdminBooking';
import UserProfile from './UserProfile';
import UserEditProfile from './UserEditProfile';
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
         <AdminDash/>
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
