import React, {useEffect, useState} from 'react';
import './AdminBooking.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function SuperAdminBooking(props){
    const baseURL = localStorage.getItem("baseURL");
    const [adminBookings,setAdminBookings] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        axios.get(baseURL+'/super/bookings')
        .then(response => {
            setAdminBookings(response.data);
          
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
      },[])
    return(
        <center>
        <div class="table" id="adminBookings">
        <table>
            <tr>
                <th>Admin ID</th>
                <th>Hotel Name</th>
                <th>Room No</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
            {adminBookings.map(booking => (
                <tr className="tb" cellSpacing="50">
                        <td>{booking.adminId}</td>
                        <td>{booking.hotelName}</td>
                        <td>{booking.roomNo}</td>
                        <td>{booking.price}</td>
                        <td>1</td>                        
                        <td>{booking.price}</td>
               </tr>
            ))}   
        </table>
        </div>
        {/* <div className="adminBookings">
           <table className="bookinglist" align="center">
               <tr className="tr1" cellSpacing="50">
                        <td>Booking ID</td>
                        <td>User ID</td>
                        <td>Room No</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total Price</td>
               </tr>
               {adminBookings.map(booking => (
                <tr className="tb" cellSpacing="50">
                        <td>{booking.id}</td>
                        <td>{booking.userId}</td>
                        <td>{booking.roomNo}</td>
                        <td>{booking.price}</td>
                        <td>1</td>                        
                        <td>{booking.price}</td>
               </tr>
            ))}
           </table>
        </div> */}
        </center>
    );
}

export default SuperAdminBooking;