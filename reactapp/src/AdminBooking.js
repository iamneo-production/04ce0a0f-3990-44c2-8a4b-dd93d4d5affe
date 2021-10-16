import React from 'react';
import './AdminBooking.css';
function adminBooking(){
    return(
        <div className="adminBookings">
           <table className="bookinglist" align="center">
               <tr className="tr1" cellSpacing="50">
                        <td>Booking ID</td>
                        <td>User ID</td>
                        <td>Room No</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total Price</td>
               </tr>
           </table>
           <table className="tb" align="center">
               
           </table>
        </div>
    );
}

export default adminBooking;