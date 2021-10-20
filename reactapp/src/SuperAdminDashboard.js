import React, {useEffect, useState} from 'react';
import './SuperAdminDashboard.css';
import axios from 'axios';
import AdminList from './AdminList';

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
        <div class="container" id="allUserDetails">
            {hotels.map(function (hotel) {
                return(
                    <AdminList hotelImageURL={hotel.hotelImageURL} sellerName={hotel.sellerName} hotelName={hotel.hotelName} hotelAddress={hotel.hotelAddress} mobileNumber={hotel.mobileNumber} hotelId={hotel.id} rooms={hotel.rooms}
                    />
                )
            }
            )}   
        </div></center>
    );
}

export default SuperAdminDashboard;