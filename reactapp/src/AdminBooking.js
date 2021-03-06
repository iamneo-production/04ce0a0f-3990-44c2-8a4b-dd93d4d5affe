import React, {useEffect, useState} from 'react';
import './AdminBooking.css';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

function AdminBooking(props){
    const baseURL = localStorage.getItem("baseURL");
    const [adminBookings,setAdminBookings] = useState([]);

    useEffect(()=>{
        axios.get(baseURL+'/admin/bookings?id='+props.match.params.adminId)
        .then(response => {
            setAdminBookings(response.data);
          
        })
        .catch(error => {
            console.log('There was an error!', error);      
        });
      },[])
    return(
        <center>
        <div id="adminBookings">
        <div class="table" id="bookingList">
        <table>
            <tr>
                <th>Booking ID</th>
                <th>User ID</th>
                <th>Room No</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
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
        </div>
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

export default withRouter(AdminBooking);