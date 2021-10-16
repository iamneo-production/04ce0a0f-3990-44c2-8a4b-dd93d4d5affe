import React from 'react';
import './UserHotelBooking.css';
function userHotelBooking(){
    return(
        <div className="userBookingBody">
           <table className="ta" align="center">
               <tr className="tr1" cellSpacing="50">
                        <td>Hotel Name</td>
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

export default userHotelBooking;