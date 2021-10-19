import React from 'react';
import './SuperAdminBooking.css';
function superAdminBooking(){
    const bookingList=[
        {
            adminid: "123",
            hotelname:"Ho",
            roomNo: "502",
            price: 1000,
            quantity: 1,
            totalPrice: 1000
        },
        {
            adminid: "456",
            hotelname:"t",
            roomNo: "5012",
            price: 1000,
            quantity: 1,
            totalPrice: 1000
        },
        {
            adminid: "789",
            hotelname:"el",
            roomNo: "502",
            price: 1000,
            quantity: 1,
            totalPrice: 1000
        }
    ];
    return(
        <div className="adminslist">
           <table className="allAdminDetails" align="center">
               <tr className="tr1" cellSpacing="50">
                        {/*<td>Admin ID</td>
                        <td>Hotel Name</td>
                        <td>Room No</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total Price</td>*/}
                        <td className="t1" Style="border-top-left-radius:15px">Admin ID</td>
                        <td className="t2">Hotel Name</td>
                        <td className="t3">Room No</td>
                        <td className="t4">Price</td>
                        <td className="t5">Quantity</td>
                        <td className="t6" Style="border-top-right-radius:15px">Total Price</td>
               </tr>
               {bookingList.map(booking => (
                    <tr className="tr2" cellSpacing="50">
                        <td className="td1">{booking.adminid}</td>
                        <td className="td2">{booking.hotelname}</td>
                        <td className="td3">{booking.roomNo}</td>
                        <td className="td4">{booking.price}</td>
                        <td className="td5">{booking.quantity}</td>
                        <td className="td6">{booking.totalPrice}</td>
                        </tr>
            ))}
           </table>

        </div>
    );
}

export default superAdminBooking;