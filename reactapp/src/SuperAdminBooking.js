import React from 'react';
import './SuperAdminBooking.css';
function superAdminBooking(){
    return(
        <div className="adminslist">
           <table className="allAdminDetails" align="center">
               <tr className="tr1" cellSpacing="50">
                        <td>Admin ID</td>
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

export default superAdminBooking;