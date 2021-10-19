//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import UserHotelBooking from './UserHotelBooking';
import reportWebVitals from './reportWebVitals';
import Editprofile from './EditProfile';
import AdminProfileEdit from './AdminProfileEdit';
import AdminBooking from './AdminBooking';
import AdminEditRoom from './AdminEditRoom';
import Hotel_Navbar from './UserNavbar';
import AdminAddRoom from './AdminAddRoom';
import Admin_Navbar from "./Admin_Navbar";
import SuperAdminNavbar from "./SuperAdminNavbar";
import SuperAdminBooking from "./SuperAdminBooking";
import UserDashboard from "./UserDashboard";
import UserProfile from "./UserProfile";
import AdminProfile from "./AdminProfile";
import UserHotelDetails
 from "./UserHotelDetails";
function App() {
  return (
    <Router>
    <div className="app">
      
      <Switch>
      {/* User Routings   */}
       
      <Route path="/user/hotelDetail">          
         <Hotel_Navbar/>
         <UserHotelDetails/>
      </Route>
      <Route path="/user/profile">          
         <Hotel_Navbar/>
         <UserProfile/>
         </Route>
      <Route path="/user/bookings">    
        <Hotel_Navbar/>      
        <UserHotelBooking />
      </Route>  
      <Route path="/user/editProfile">          
         <Hotel_Navbar/>
         <Editprofile/>
      </Route>
      <Route path="/login">          
         
      </Route>
      <Route path="/user/dashboard">
        <Hotel_Navbar/>          
         <UserDashboard/>
      </Route> 
      <Route path="/user/hotelDetail/{hotelId}">          
         
      </Route>
      <Route path="/user/roomDetail/{roomId}">          
         
      </Route>
      <Route path="/user/editProfile/{userId}">          
         
      </Route>
      <Route path="/user/bookings/{userId}">          
         
      </Route>
      <Route path="/user/profile/{userId}">          
         
      </Route>



      {/* Admin Routings */}
      <Route path="/admin/profile">          
         <Admin_Navbar/>
         <AdminProfile/>
         </Route>
      <Route path="/admin/editRoom">          
        <Admin_Navbar/>
        <AdminEditRoom/>
      </Route>
      <Route path="/admin/bookings">          
         <Admin_Navbar/>
         <AdminBooking/>
         </Route>
      <Route path="/admin/editProfile">          
        <Admin_Navbar/>
        <AdminProfileEdit/>   
       </Route>
      <Route path="/admin/signup">          
         
      </Route> 
      <Route path="/admin/profile/{adminId}">          
         
      </Route>
      <Route path="/admin/dashboard">          
         
      </Route>
      <Route path="/admin/addRoom">          
         <Admin_Navbar/>
         <AdminAddRoom/>
      </Route>
      <Route path="/admin/editRoom/{roomId}">          
         
      </Route>
      <Route path="/admin/bookings/{adminId}">          
         
      </Route>
      <Route path="/admin/editProfile/{adminId}">          
         
      </Route>


      {/* SuperAdmin Routings */}
      <Route path="/superadmin/login">          
         
      </Route>
      <Route path="/superadmin/adminList">          
         
      </Route>
      <Route path="/superadmin/adminBookings">          
         <SuperAdminNavbar/>
         <SuperAdminBooking/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;