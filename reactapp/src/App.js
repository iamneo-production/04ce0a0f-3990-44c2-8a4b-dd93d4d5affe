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
import adminAddRoom from './AdminAddRoom';

function App() {
  return (
    <Router>
    <div className="app">
      
      <Switch>
      {/* User Routings   */}
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
      <Route path="/admin/editRoom">          
        <Hotel_Navbar/>
        <AdminEditRoom/>
      </Route>
      <Route path="/admin/bookings">          
         <Hotel_Navbar/>
         <AdminBooking/>
         </Route>
      <Route path="/admin/signup">          
         
      </Route> 
      <Route path="/admin/profile/{adminId}">          
         
      </Route>
      <Route path="/admin/dashboard">          
         
      </Route>
      <Route path="/admin/addRoom">          
         <Hotel_Navbar/>
         <adminAddRoom/>
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
         
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;