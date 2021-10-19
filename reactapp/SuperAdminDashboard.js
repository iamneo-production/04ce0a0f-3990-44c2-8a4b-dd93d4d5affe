import React, {useEffect, useState} from 'react';
import './UserHotelBooking.css';
import axios from 'axios';

function SuperAdminDashboard(){
    const baseURL = localStorage.getItem("baseURL");
    const [hotels,setHotels]=useState([]);

    useEffect(()=>{
        axios.get(baseURL+'/user/dashboard')
        .then(response => {
            setHotels(response.data);
            
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
      },[])

    function deleteAdmin(adminId){
        
    }

    return(
        
        <center>
        <div class="container">
        <div class="row">
            <div class="col adminimg"><img src="admin.png" alt="admin image"/></div>
            <div class="col left"><p>Admin Name</p></div>
            <div class="col mid"><p>Hotel Name</p></div>
            <div class="col mid"><p>Hotel Address</p></div>
            <div class="col mid"><p>Mobile Number</p></div>
            <div class="col last"><button>.</button></div>
        </div>
            {hotels.map(hotel => (
               <div class="row">
                <div class="col adminimg"><img src="https://pix8.agoda.net/hotelImages/433/43322/43322_17111604170059419800.jpg" alt="admin image"/></div>
                <div class="col left"><p>{hotel.sellerName}</p></div>
                <div class="col mid"><p>{hotel.hotelName}</p></div>
                <div class="col mid"><p>{hotel.hotelAddress}</p></div>
                <div class="col mid"><p>{hotel.mobileNumber}</p></div>
                <div class="col last"><button>.</button></div>
               </div>
            ))}  
        </div></center>
    );
}

export default SuperAdminDashboard;