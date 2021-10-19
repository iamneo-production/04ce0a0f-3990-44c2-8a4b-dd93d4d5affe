import React from 'react';
import './AdminDashboard.css';
import Room from './Room';
import AdminNavbar from './AdminNavbar';
function AdminDashboard(){
    return(
        
        <div>
            
            <AdminNavbar/>
            <h1>Hotel name</h1>
            <div class="rooms">
            <Room/>
            <Room/>
            </div>
            <div class="total">
            <div class="earnings">
                <p>Earning</p>
                <p>Total Today</p>
                <hr/>
                <p>monthly earnings</p>
            </div>
            <div class="addroom">
                <p>want to add room</p>
                <button>click me</button>
            </div>
            </div>
           </div>
    );
}
export default AdminDashboard;