import React, {useEffect, useState} from 'react';
import './SuperAdminDashboard.css';
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
        axios.post(baseURL+'/super/deleteAdmin?id='+adminId)
        .then(response => {
            window.location.reload();            
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
    }

    return(
        
        <center>
        <div class="table" id="userBookingBody">
        <table>
            <tr>
                <th>Seller Name</th>
                <th>Hotel Name</th>
                <th>Hotel Address</th>
                <th>Mobile Number</th>
                <th>Action</th>
            </tr>
            {hotels.map(booking => (
                <tr className="tb" cellSpacing="50">
                        <td>{booking.sellerName}</td>
                        <td>{booking.hotelName}</td>
                        <td>{booking.hotelAddress}</td>                       
                        <td>{booking.mobileNumber}</td>
                        <td><button >DELETE</button></td>
               </tr>
            ))}   
        </table>
        </div></center>
    );
}

export default SuperAdminDashboard;